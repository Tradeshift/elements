import path from 'path';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, PKG_JSON.src);

const outputConfig = {
	extend: true,
	sourcemap: true,
	globals: require(`${LERNA_ROOT_PATH}/rollup.globals.json`)
};

const nodeModules = [
	path.join(PACKAGE_ROOT_PATH, 'node_modules/**'),
	path.join(LERNA_ROOT_PATH, 'node_modules/**')
];

const postcssPlugin = postcss({
	plugins: [
		postcssPresetEnv({
			importFrom: `${LERNA_ROOT_PATH}/packages/core/src/vars.css`
		})
	],
	inject: false,
	extract: false,
	minimize: false,
	sourceMap: 'inline'
});

const config = [
	{
		input: INPUT_FILE,
		output: [
			{
				...outputConfig,
				file: PKG_JSON.module,
				format: 'es'
			}
		],
		external: ['@tradeshift/elements'],
		plugins: [
			postcssPlugin,
			babel({
				babelrc: false,
				exclude: nodeModules,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							targets: {
								esmodules: true
							}
						}
					]
				]
			})
		]
	},
	{
		input: INPUT_FILE,
		output: [
			{
				...outputConfig,
				name: LERNA_PACKAGE_NAME.replace('@tradeshift/', 'ts.'),
				file: PKG_JSON.browser,
				format: 'iife'
			}
		],
		external: ['@tradeshift/elements'],
		plugins: [
			globals(),
			builtins(),
			resolve({
				module: true,
				jsnext: true,
				main: true,
				browser: true
			}),
			commonjs({
				include: nodeModules
			}),
			postcssPlugin,
			babel({
				babelrc: false,
				exclude: nodeModules,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							// useBuiltIns: 'usage',
							targets: {
								ie: 11
							}
						}
					]
				],
				plugins: [
					[
						'@babel/transform-runtime',
						{
							helpers: false,
							regenerator: true
						}
					]
				]
			})
		]
	}
];

export default config;
