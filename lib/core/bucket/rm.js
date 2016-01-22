'use strict'

const db = require('../../db')
const colors = require('colors')

module.exports = function(name){
  let usingAccount = db('accounts').chain().find({using: true})

  const buckets = usingAccount.value().buckets

  buckets.map((item, index)=>{
    if (item.name === name) {
      buckets.splice(index, 1)
      usingAccount.assign({ buckets }).value()
    }
  })

  console.log(colors.green(`Bucket ${name} was removed.`))
}