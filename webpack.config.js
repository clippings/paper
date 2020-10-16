const path = require('path');
const pkg = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const cssLoader = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      sourceMap: true,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['cssnano'],
      },
    },
  },
];
const cssLoaders = [
  {
    test: /\.scss$/,
    use: [
      MiniCssExtractPlugin.loader,
      ...cssLoader,
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          sassOptions: {
            includePaths: [path.resolve('./src/assets/scss')],
          },
        },
      },
    ],
  },
  {
    test: /\.css$/,
    use: [MiniCssExtractPlugin.loader, ...cssLoader],
  },
  {
    test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.png($|\?)/,
    use: [
      {
        loader: 'url-loader',
      },
    ],
  },
];

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: 'paper.css',
});

module.exports = {
  devtool: false,
  target: 'node',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    library: pkg.name,
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@paper/components': path.resolve(__dirname, './src'),
      '@paper/utils': path.resolve(__dirname, './src'),
      '@paper/enums': path.resolve(__dirname, './src'),
      '@paper/assets': path.resolve(__dirname, './src/assets'),
      '@core': path.resolve(__dirname, './src/core'),
    },
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      ...cssLoaders,
    ],
  },
  plugins: [cssExtractPlugin],
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true, // Must be set to true if using source-maps in production
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            passes: 2, // Run another pass with the minimiser
          },
        },
      }),
    ],
  },
};
