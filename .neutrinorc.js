const path = require('path');
const eslint = require('@neutrinojs/eslint');
const reactComponents = require('@neutrinojs/react-components');

module.exports = {
  use: [
    eslint({
      // // Uses extensions from neutrino.options.extensions
      // test: neutrino.regexFromExtensions(),
      include: [
        'src',
        // neutrino.options.source,
        // neutrino.options.tests,
        'gatsby-node.js',
        // '.neutrinorc.js',
      ].map(local => path.resolve(local)),
      exclude: [],
      eslint: {
        // // For supported options, see:
        // // https://github.com/webpack-contrib/eslint-loader#options
        // // https://eslint.org/docs/developer-guide/nodejs-api#cliengine
        // cache: true,
        // // Downgrade errors to warnings when in development, to reduce the noise in
        // // the webpack-dev-server overlay (which defaults to showing errors only),
        // // and to also ensure hot reloading isn't prevented.
        // emitWarning: process.env.NODE_ENV === 'development',
        // // Make errors fatal for 'production' and 'test'.
        // // However note that even when `false` webpack still fails the build:
        // // https://github.com/webpack-contrib/eslint-loader/issues/257
        // failOnError: process.env.NODE_ENV !== 'development',
        // cwd: neutrino.options.root,
        // useEslintrc: false,
        // // Can be the name of a built-in ESLint formatter
        // // or the module/path of an external one.
        // formatter: 'codeframe',
        // // The options under `baseConfig` correspond to those
        // // that can be used in an `.eslintrc.*` file.
        baseConfig: {
          env: {
            commonjs: true,
            es2020: true,
            node: true,
          },
          extends: [
            'airbnb',
          ],
          parserOptions: {
            ecmaVersion: 11,
          },
          rules: {
          },
        },
      },
    }),
    reactComponents(),
  ],
};
