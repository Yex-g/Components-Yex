// vue.config.js
const path = require('path')
const fs = require('fs')

function resolve(dir) {
  return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "./public/style/base.scss";`
      }
    }
  },
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@assets', resolve('./src/assets'))
      .set('@components', resolve('./src/components'))
      .set('@views', resolve('./src/views'))
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.devtool = "none"
      // 为生产环境修改配置...
    } else {
      config.devtool = 'source-map'
      // 为开发环境修改配置...
      /* config.modulu.rule()
      .test(/\.sass$/)
      .use()
      .loader(['style','css','sass'])
      .end() */
    }
  }
}