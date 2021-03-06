const path = require('path')
module.exports = {
  stories: ['../src/stories/**/*.stories.*'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-links', '@storybook/addon-knobs', 'storybook-addon-jsx'],
  webpackFinal:  async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
          options: {
            tsconfigPath: path.resolve(__dirname, '../tsconfig.json'),
          },
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
      '@paper/components': path.resolve(__dirname, '../src'),
      '@paper/utils': path.resolve(__dirname, '../src'),
      '@paper/enums': path.resolve(__dirname, '../src'),
      '@paper/assets': path.resolve(__dirname, '../src/assets'),
      '@core': path.resolve(__dirname, '../src/core'),
    };
    return config;
  },
};
