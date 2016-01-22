'use strict'

const db = require('../../db')
const colors = require('colors')

const ls = require('./ls')

module.exports = function(name){

  let usingAccount = db('accounts').chain().find({using: true})
  let account = db('accounts').chain().find({ name })

  function useAccount(){
    account.assign({using: true}).value()
    ls()
  }

  if (db('accounts').size() === 0) { 
    console.log('No account yet! Use `$ cown add` to add an account.')
    return 
  }

  if (account.value()) {
    if (usingAccount.value()) {
      usingAccount.assign({using: false}).value()
    }
    useAccount()
  } else {
    // account not exist
    console.log(colors.red(`Account '${name}' not exist!`))
  }
}