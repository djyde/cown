'use strict'

const inquirer = require('inquirer')
const low = require('lowdb')
const storage = require('lowdb/file-sync')
const db = low('db.json', { storage })

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
      accessKey: answers.accessKey,
      secretKey: answers.secretKey,
      using: false
    })
  })
}