'use strict'

const inquirer = require('inquirer')
const db = require('../db')

module.exports = function(){
  let questions = [
    {
      type: 'input',
      name: 'name',
      message: 'Account name (just a code name):'
    },
    {
      type: 'input',
      name: 'accessKey',
      message: 'Your AccessKey:'
    },
    {
      type: 'input',
      name: 'secretKey',
      message: 'Your SecretKey:'
    }
  ]

  inquirer.prompt(questions, (answers)=>{
    db('accounts').push({
      name: answers.name,
      accessKey: answers.accessKey,
      secretKey: answers.secretKey,
      using: db('accounts').size() === 0
    })
  })
}