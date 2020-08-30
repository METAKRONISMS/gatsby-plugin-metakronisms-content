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
      include: [
        'src',
        'gatsby-node.js',
        '.neutrinorc.js',
      ].map(local => path.resolve(local)),
      exclude: [],
      eslint: {
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
