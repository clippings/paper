const path = require('path')
module.exports = {
  stories: ['../src/stories/**/*.stories.*'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal:  async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        // Optional
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            sassOptions: {
              includePaths: [path.resolve('../src/assets/scss')],
            },
          },
        },
      ],
    });
    config.performance = {
      maxEntrypointSize: 4 * 1024 * 1024, // 4MB
      maxAssetSize: 3 * 1024 * 1024, // 3MB
      hints: false,
    };
    config.resolve.modules = [
      '../node_modules',
    ];
    config.resolve.alias = {
      '@paper': path.resolve(__dirname, '../src'),
    };
    return config;
  },
};
