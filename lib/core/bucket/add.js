'use strict'

const inquirer = require('inquirer')
const db = require('../../db')

module.exports = function(){
  let usingAccount = 
    db('accounts')
      .chain()
      .find({using: true})

  let questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Bucket name:'
    },
    {
      type: 'input',
      name: 'domain',
      message: 'Bucket domain:'
    }
  ]

  inquirer.prompt(questions, (answers)=>{
    const domain = answers.domain
    usingAccount.assign({
      buckets: Object.assign(usingAccount.value().buckets, {
        [answers.name]: {
          domain, 
          isDefault: Object.keys(usingAccount.value().buckets).length === 0
        }
      })
    }).value()
    console.log(`Bucket ${answers.name} added!`)
  })

}