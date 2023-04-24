const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true ,
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)]
  }
})
