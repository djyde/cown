#!/usr/bin/env node
'use strict'

const cown = require('commander')
const core = require('./core')

cown
  .version(require('../package.json').version)

cown
  .command('add')
  .description('Add new account')
  .action(core.add)
cown
  .command('ls')
  .description('List all accounts')
  .action(core.ls)

cown
  .command('use <account>')
  .description('Switch using account')
  .action(core.use)

cown.parse(process.argv)