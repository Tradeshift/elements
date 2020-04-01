import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';
import svgo from 'rollup-plugin-svgo';
import json from 'rollup-plugin-json';

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH, PRODUCTION } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, PKG_JSON.src);

// For efficient build of esm modules, all local dependencies should be external.
const esmExternals = Object.keys(PKG_JSON.dependencies).filter(depName => depName.startsWith('@tradeshift'));

const PROD = !!PRODUCTION;
const DEV = !PROD;

const outputConfig = {
	extend: true,
	sourcemap: DEV,
	globals: require(`${LERNA_ROOT_PATH}/rollup.globals.json`)
};

const nodeModules = [path.join(LERNA_ROOT_PATH, 'node_modules/**'), path.join(PACKAGE_ROOT_PATH, 'node_modules/**')];

const postcssPlugin = postcss({
	plugins: [
		postcssPresetEnv({
			importFrom: [
				`${LERNA_ROOT_PATH}/packages/core/src/utils/env-variables.json`,
				`${LERNA_ROOT_PATH}/packages/core/src/vars.css`
			],
			preserve: true,
			stage: 0
		})
	],
	inject: false,
	extract: false,
	minimize: PROD,
	sourceMap: DEV && 'inline'
});

const svgoPlugin = svgo({ raw: true });

const babelPlugin = babel({
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
		PROD && 'minify-dead-code-elimination'
	].filter(Boolean)
});

// Plugins used by both configs
const commonPlugins = [postcssPlugin, json(), svgoPlugin, resolve()];

const esmConfig = {
	input: INPUT_FILE,
	output: [
		{
			file: PKG_JSON.module,
			format: 'esm'
		}
	],
	external: esmExternals,
	plugins: [...commonPlugins, babelPlugin, terser()]
};

const config = [
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
			...commonPlugins,
			commonjs({
				include: nodeModules
			}),
			babelPlugin,
			PROD && terser()
		].filter(Boolean)
	}
];

// For development we are using `umd`s
if (PROD) {
	config.unshift(esmConfig);
}

export default config;
