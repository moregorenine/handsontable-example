const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    'basic/quick-start': './src/js/basic/quick-start.ts',
    'basic/data-source': './src/js/basic/data-source.ts',
    'header/merge-cells': './src/js/header/merge-cells.ts',
    'cell-types/autocomplete': './src/js/cell-types/autocomplete.ts',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    publicPath: '/',
    filename: '[name].js',
    path: path.resolve(__dirname, 'public'),
  },
};
