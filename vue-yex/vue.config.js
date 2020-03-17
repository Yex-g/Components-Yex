// vue.config.js
const path = require('path')
const fs = require('fs')

module.exports = {
    configureWebpack: config => {
      console.log(process.env.NODE_ENV)
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