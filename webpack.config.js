var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

var config = {
	entry: __dirname + '/app/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.template.html'
		})
	],
	devServer: {
		contentBase: __dirname + '/app'
	}
}

module.exports = config