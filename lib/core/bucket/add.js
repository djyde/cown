'use strict'

const inquirer = require('inquirer')
const db = require('../../db')
const _ = require('lodash')

module.exports = function(){

  if (db('accounts').size() === 0) {
    console.log('No account yet! Use `$ cown add -a` to add an account.')
    return
  }

  let usingAccount = 
    db('accounts')
      .chain()
      .find({using: true})

  if (!usingAccount) {
    console.log('No using account! Use `$ cown use <name> -a` to use an account.')
    return
  }

  let questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Bucket name:',
      // TODO: bucket name not null
      validate: (value)=> _.find(usingAccount.value().buckets, {name: value}) ? 'Bucket existed' : true
    },
    {
      type: 'input',
      name: 'domain',
      message: 'Bucket domain:'
    }
  ]

  inquirer.prompt(questions, (answers)=>{
    const name = answers.name // bucket name
    const domain = answers.domain // bucket domain
    
    usingAccount.assign({
      buckets: usingAccount.value().buckets.concat([{
        name, domain, isDefault: usingAccount.value().buckets.length === 0
      }])
    }).value()
    console.log(`Bucket ${answers.name} was added!`)
  })

}