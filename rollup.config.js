import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH, PRODUCTION } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, PKG_JSON.src);

/**
 * @TODO compressed, minified, no-sourcemap version for prod
 */

const outputConfig = {
	extend: true,
	sourcemap: !PRODUCTION,
	globals: require(`${LERNA_ROOT_PATH}/rollup.globals.json`)
};

const nodeModules = [
	path.join(LERNA_ROOT_PATH, 'node_modules/**'),
	path.join(PACKAGE_ROOT_PATH, 'node_modules/**')
];

const postcssPlugin = postcss({
	plugins: [
		postcssPresetEnv({
			importFrom: `${LERNA_ROOT_PATH}/packages/core/src/vars.css`,
			browsers: 'ie 11'
		})
	],
	inject: false,
	extract: false,
	minimize: !!PRODUCTION,
	sourceMap: !PRODUCTION && 'inline',
	autoprefixer: { grid: true }
});

const config = [
	{
		input: INPUT_FILE,
		output: [
			{
				...outputConfig,
				file: PKG_JSON.module,
				format: 'esm'
			},
			{
				...outputConfig,
				file: PKG_JSON.main,
				format: 'cjs'
			}
		],
		external: ['@tradeshift/elements'],
		plugins: [
			postcssPlugin,
			resolve(),
			babel({
				babelrc: false,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							loose: true,
							targets: {
								esmodules: true
							}
						}
					]
				],
				plugins: [PRODUCTION && 'minify-dead-code-elimination'].filter(Boolean)
			}),
			PRODUCTION && sizeSnapshot(),
			PRODUCTION && terser()
		].filter(Boolean)
	},
	{
		input: INPUT_FILE,
		output: [
			{
				...outputConfig,
				name: LERNA_PACKAGE_NAME.replace('@tradeshift/', 'ts.'),
				file: PKG_JSON.browser,
				format: 'umd'
			}
		],
		external: ['@tradeshift/elements'],
		plugins: [
			postcssPlugin,
			resolve(),
			commonjs({
				include: nodeModules
			}),
			babel({
				babelrc: false,
				exclude: [/\/core-js\//],
				runtimeHelpers: false,
				externalHelpers: false,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							useBuiltIns: false,
							loose: true,
							targets: {
								ie: '11'
							},
							exclude: ['transform-regenerator', 'transform-async-to-generator']
						}
					]
				],
				plugins: [
					[
						'module:fast-async',
						{
							env: {
								log: false
							},
							compiler: {
								promises: true,
								generators: false
							},
							runtimePattern: null,
							useRuntimeModule: false
						}
					],
					PRODUCTION && 'minify-dead-code-elimination'
				].filter(Boolean)
			}),
			PRODUCTION && sizeSnapshot(),
			PRODUCTION && terser()
		].filter(Boolean)
	}
];

export default config;
