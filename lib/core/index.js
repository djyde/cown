'use strict'

module.exports = {
  use(name, options){
    options.account ? require('./account').use(name) : require('./bucket').use(name)
  },
  ls(options){
    options.account ? require('./account').ls() : require('./bucket').ls()
  },
  add(options){
    options.account ? require('./account').add() : require('./bucket').add()
  },
  rm(name, options){
    options.account ? require('./account').rm(name) : require('./bucket').rm(name)
  }
}