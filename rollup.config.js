import path from 'path';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
// import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import postcssPresetEnv from 'postcss-preset-env';

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, PKG_JSON.src);

/**
 * @TODO compressed, minified, no-sourcemap version for prod
 */

const outputConfig = {
	extend: true,
	sourcemap: true,
	globals: require(`${LERNA_ROOT_PATH}/rollup.globals.json`)
};

const nodeModules = [
	path.join(LERNA_ROOT_PATH, 'node_modules/**'),
	path.join(PACKAGE_ROOT_PATH, 'node_modules/**')
];

// [
// 	PACKAGE_ROOT_PATH,
// 	path.join(PACKAGE_ROOT_PATH, 'node_modules/lit-element'),
// 	path.join(PACKAGE_ROOT_PATH, 'node_modules/lit-html'),
// 	path.join(PACKAGE_ROOT_PATH, '**/src')
// ]

const postcssPlugin = postcss({
	plugins: [
		postcssPresetEnv({
			importFrom: `${LERNA_ROOT_PATH}/packages/core/src/vars.css`,
			browsers: 'ie 11'
		})
	],
	inject: false,
	extract: false,
	minimize: true,
	sourceMap: 'inline',
	autoprefixer: { grid: true }
});

const config = [
	// {
	// 	input: INPUT_FILE,
	// 	output: [
	// 		{
	// 			...outputConfig,
	// 			file: PKG_JSON.module,
	// 			format: 'esm'
	// 		},
	// 		{
	// 			...outputConfig,
	// 			file: PKG_JSON.main,
	// 			format: 'cjs'
	// 		}
	// 	],
	// 	external: ['@tradeshift/elements'],
	// 	plugins: [
	// 		postcssPlugin,
	// 		resolve(),
	// 		babel({
	// 			babelrc: false,
	// 			exclude: nodeModules,
	// 			presets: [
	// 				[
	// 					'@babel/env',
	// 					{
	// 						modules: false,
	// 						targets: {
	// 							esmodules: true
	// 						}
	// 					}
	// 				]
	// 			],
	// 			plugins: [
	// 				'@babel/proposal-class-properties',
	// 				['@babel/proposal-decorators', { decoratorsBeforeExport: true }]
	// 			]
	// 		})
	// 	]
	// },
	{
		input: INPUT_FILE,
		// path.join(
		// 	LERNA_ROOT_PATH,
		// 	'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js'
		// )
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

			// globals(),
			// builtins(),
			resolve(),
			commonjs({
				include: nodeModules
			}),

			babel({
				babelrc: false,
				exclude: [/\/core-js\//],
				runtimeHelpers: false,
				presets: [
					[
						'@babel/env',
						{
							debug: true,
							modules: false,
							useBuiltIns: 'usage',
							targets: {
								ie: '11'
							}
						}
					]
				],
				plugins: [
					'@babel/proposal-class-properties',
					['@babel/proposal-decorators', { decoratorsBeforeExport: true }]
					// '@babel/transform-runtime'
				]
			})
			// terser()
		]
	}
];

/*
{
				babelrc: false,
				exclude: /node_modules\/(?!(lit-html))/,
				// include: [/node_modules\/*\/src/, /node_modules\/lit-html/, /src/],
				runtimeHelpers: true,
				// include,
				presets: [
					[
						'@babel/env',
						{
							modules: false,
							targets: 'ie 11'
						}
					]
				],
				plugins: [
					'@babel/proposal-class-properties',
					['@babel/proposal-decorators', { decoratorsBeforeExport: true }],

					[
						'@babel/transform-runtime',
						{
							helpers: false,
							regenerator: false
						}
					]
				]
			}
 */

export default config;
