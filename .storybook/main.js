const path = require('path');

module.exports = {
  stories: [
    '../src/components/**/*.stories.jsx',
    // '../stories/**/*.stories.jsx'
  ],
  addons: [
    '@storybook/addon-essentials',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: require.resolve('style-loader')
        },
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true
          }
        },
        {
          loader: require.resolve('sass-loader')
        }
      ]
    });

    // Return the altered config
    return config;
  },
};
