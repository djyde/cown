'use strict'

const low = require('lowdb')
const storage = require('lowdb/file-sync')
const db = low('db.json', { storage })

module.exports = db