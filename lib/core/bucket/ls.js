'use strict'

const db = require('../../db')
const colors = require('colors')

module.exports = function(){
  let usingAccount = 
    db('accounts')
      .chain()
      .find({using: true})
      .value()

  for(let name in usingAccount.buckets){
    console.log(`Buckets of ${usingAccount.name}:`)
    if (usingAccount.buckets[name].default) {
      console.log(colors.green(`* ${name}`))
    } else {
      console.log(`  ${name}`)
    }
  }
}