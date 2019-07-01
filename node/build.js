const Webpack = require('webpack')
const WebpackDevServre = require('webpack-dev-server')
const path = require('path')

const config = {
  mode: 'development',
  entry: {
    server: path.resolve(__dirname, '../src/index.ts')
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
  }
}

const complier = Webpack(config)

const devServer = new WebpackDevServre(complier, {

})

devServer.listen(8000, '127.0.0.1', () => {
  console.log('starting server on http://localhost:8000')
})