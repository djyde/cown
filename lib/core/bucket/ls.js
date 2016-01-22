'use strict'

const db = require('../../db')
const colors = require('colors')

module.exports = function(){
  let usingAccount = 
    db('accounts')
      .chain()
      .find({using: true})
      .value()
    
  console.log(`Buckets of ${usingAccount.name}:`)
  for(let name in usingAccount.buckets){
    if (usingAccount.buckets[name].isDefault) {
      console.log(colors.green(`* ${name}`))
    } else {
      console.log(`  ${name}`)
    }
  }
}