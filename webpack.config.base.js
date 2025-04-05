const path = require('path')

module.exports = {
  mode: 'development',
  devtool: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: {
          loader: 'source-map-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  // resolve: {
  //   extensions: ['.js', '.jsx'], // 支持自动解析 .jsx 文件
  // },
}
