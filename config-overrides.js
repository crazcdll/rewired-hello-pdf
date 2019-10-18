const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = function override(config, env) {
  console.log(config, '---config')
  console.log(env, '---env')
  //do stuff with the webpack config...
  config.output.globalObject = 'this'
  config.module.rules[0].parser.requireEnsure = true
  config.plugins.push(new CopyWebpackPlugin([
    {
      from: 'node_modules/pdfjs-dist/cmaps/',
      to: 'cmaps/'
    },
    {
      from: 'node_modules/pdfjs-dist/build/pdf.worker.js'
    }
  ]))

  return config;
}
