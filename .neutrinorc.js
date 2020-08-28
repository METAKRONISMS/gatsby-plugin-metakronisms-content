const path = require('path');
const eslint = require('@neutrinojs/eslint');
const reactComponents = require('@neutrinojs/react-components');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  output: {
    globalObject: 'this',
  },
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
            'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
            'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
          },
          settings: {
            'import/resolver': {
              node: {
                paths: ['src']
              }
            }
          },
        },
      },
    }),
    reactComponents(),
    (neutrino) => {
      // console.info('neutrino before', neutrino.config.module);
      neutrino.config.optimization.set('minimize', !process.env.BUILD_SKIP_MIN);

      // neutrino.config.module.rule('scss')
      //   .oneOf('normal')
      //   .test(/\.scss$/)
      //   .use('sass')
      //   .loader('sass-loader');
      // neutrino.config.module.rule('scss')
      //   .oneOf('modules')
      //   .test(/\.module\.scss$/)
      //   .use('sass')
      //   .loader('sass-loader')
      //   .options({ modules: true });
      // console.info('neutrino after', neutrino.config.module);

      // https://github.com/zeropaper/eazin/blob/master/src/dev/neutrino-monorepo.js
      neutrino.config
        .externals(nodeExternals())
        // .when(hasSourceMap, () => neutrino.use(banner()))
        // Disable the chunking behaviour inherited from the react preset
        .optimization.splitChunks(false)
        .runtimeChunk(false)
        .end()
        .output // Override hashed filename/subdirectory usage inherited from @neutrinojs/react.
        .filename('[name].js')
        .library('[name]')
        .libraryTarget('umd')
        .umdNamedDefine(true);
    }
  ],
};
