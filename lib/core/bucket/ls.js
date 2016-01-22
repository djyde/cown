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
  usingAccount.buckets.map((bucket)=>{
    if (bucket.isDefault) {
      console.log(colors.green(`* ${bucket.name}`))
    } else {
      console.log(`  ${bucket.name}`)
    }
  })
}