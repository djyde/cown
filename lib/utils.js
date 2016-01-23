'use strict'

const colors = require('colors')

module.exports = {
  showError(err){
    switch(err.code){
      case 401:
        console.log(colors.red(err.name + ':'), 'Token 不正确')
        break
      case 413:
        console.log(colors.red(err.name + ':'), '文件过大')
        break
      case 614:
        console.log(colors.red(err.name + ':'), '文件已存在')
        break
      case 631:
        console.log(colors.red(err.name + ':'), 'Bucket 不存在')
        break
      default:
        console.log(colors.red('Unknown Error'), err.code)
        break
    }
  }
}