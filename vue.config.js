/*
 * @Author: your name
 * @Date: 2020-05-05 11:33:24
 * @LastEditTime: 2020-08-22 09:40:51
 * @LastEditors: sueRimn
 * @Description: In User Settings Edit
 * @FilePath: /world-love/vue.config.js
 */ 
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: false,
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'assets',
  parallel: require('os').cpus().length > 1,
  productionSourceMap: true,
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/style/global.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias.set("@", resolve("./src"))
    // 为打包出来的文件添加哈希值
    config.output.filename('[name].[hash].js').end()
    // 解析svg
    config.module.rules.delete('svg')
    config.module
      .rule('svg-smart')
      .test(/\.svg$/)
      .include
      .add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })

    config.plugin('prefetch').tap(options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)
      return options
    })
  },
  // devServer: {
  //   hot: true,
  //   //  open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8080,
  //   https: false,
  //   hotOnly: false,
  //   before: () => {}
  // },
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: "http://39.101.220.101:8093/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    }, // 设置代理
    before: () => {}
  },
}
