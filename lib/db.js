'use strict'

const low = require('lowdb')
const storage = require('lowdb/file-sync')
const path = require('path')

const dbPath = path.resolve(__dirname, '..', 'db.json')
const db = low(dbPath, { storage })

module.exports = db