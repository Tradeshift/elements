import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';

const extend = true;
const sourcemap = true;

const outputConfig = {
	extend,
	sourcemap,
	globals: {
		'@tradeshift/ui': 'ts.ui'
	}
};

const esm = (input, output) => ({
	input,
	output: [
		{
			...outputConfig,
			external: ['@tradeshift/ui'],
			file: output,
			format: 'es'
		}
	],
	external: ['@tradeshift/ui'],
	plugins: [
		babel({
			babelrc: false,
			exclude: 'node_modules/**',
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
});

const umd = (name, input, output) => ({
	input,
	output: [
		{
			...outputConfig,
			name,
			file: output,
			format: 'umd'
		}
	],
	external: ['@tradeshift/ui'],
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
			include: 'node_modules/**'
		}),
		json({
			preferConst: true // Default: false
		}),
		babel({
			babelrc: false,
			exclude: 'node_modules/**',
			presets: [
				[
					'@babel/env',
					{
						modules: false,
						useBuiltIns: 'usage',
						targets: {
							ie: 11
						}
					}
				]
			],
			plugins: [
				'@babel/proposal-class-properties',
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
});

const basedir = process.cwd();
const pkg = require(`${process.cwd()}/package.json`);
const config = [esm(`${basedir}/${pkg.src}`, `${basedir}/${pkg.module}`)];

export default config;
