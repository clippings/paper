module.exports = function babelConfig(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false,
      },
    ],
    '@babel/react',
    '@babel/preset-typescript',
  ];

  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-styled-components'
  ];

  const env = {
    test: {
      presets: ['@babel/env', '@babel/react'],
    },
  };
  return {
    presets,
    plugins,
    env,
  };
};
