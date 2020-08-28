const neutrino = require('neutrino');

const config = neutrino().webpack();

module.exports = [
  {
    ...config,
    output: {
      ...config.output,
      globalObject: 'this',
    },
  },
];
