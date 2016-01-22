'use strict'

const db = require('../../db')
const colors = require('colors')

module.exports = function(name){
  db('accounts').remove({name})
  console.log(colors.green(`Account ${name} was removed.`))
}