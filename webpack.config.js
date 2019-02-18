const path = require('path');
const merge = require('webpack-merge');
const createDefaultConfig = require('@open-wc/building-webpack/default-config');

const { LERNA_PACKAGE_NAME, LERNA_ROOT_PATH } = process.env;
const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, 'package.json'));
const INPUT_FILE = path.join(PACKAGE_ROOT_PATH, PKG_JSON.src);

const defaultConfig = createDefaultConfig({
	indexHTML: path.resolve(PACKAGE_ROOT_PATH, './src/index.html'),
	indexJS: INPUT_FILE
});

module.exports = merge(defaultConfig, {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{ loader: 'css-loader', options: { importLoaders: 1 } },
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss',
							plugins: () => [
								require('postcss-preset-env')({
									importFrom: `${LERNA_ROOT_PATH}/packages/core/src/vars.css`
								})
							]
						}
					}
				]
			}
		]
	}
});
