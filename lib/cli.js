#!/usr/bin/env node
'use strict'

const cown = require('commander')
const core = require('./core')

cown
  .version(require('../package.json').version)

cown
  .command('add')
  .option('-a, --account', 'account action')
  .description('Add new account')
  .action(core.add)
cown
  .command('ls')
  .option('-a, --account', 'account action')
  .description('List all accounts')
  .action(core.ls)

cown
  .command('use <account>')
  .option('-a, --account', 'account action')
  .description('Switch using account')
  .action(core.use)

cown
  .command('upload <source>')
  .description('Upload file')
  .option('-b, --bucket <bucket>', 'bucket')
  .action(core.upload)

cown.parse(process.argv)