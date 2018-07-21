const XMLWebpackPlugin = require('xml-webpack-plugin')

module.exports = (neutrino, { pluginId = 'xml', ...options } = {}) => {
  neutrino.config
    .plugin(pluginId)
    .use(XMLWebpackPlugin, [options])
}
