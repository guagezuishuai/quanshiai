/*
 * @Author: your name
 * @Date: 2020-05-05 11:33:24
 * @LastEditTime: 2020-06-04 22:26:44
 * @LastEditors: Please set LastEditors
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
  //   overlay: {
  //     warnings: true,
  //     errors: true
  //   }
  // }
}
