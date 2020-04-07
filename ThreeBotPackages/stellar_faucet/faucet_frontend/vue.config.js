const path = require("path");
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  outputDir: path.resolve(__dirname, "../frontend"),
  publicPath: '/faucet',
  configureWebpack: {
    plugins: [
      new VuetifyLoaderPlugin()
    ],
  },
}
