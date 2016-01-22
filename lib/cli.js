#!/usr/bin/env node
'use strict'

const cown = require('commander')
const core = require('./core')

cown
  .version(require('../package.json').version)
  .description(' "-a" option for account mode.')

cown
  .command('add')
  .option('-a, --account', 'account action')
  .description('Add new bucket.')
  .action(core.add)
cown
  .command('ls')
  .option('-a, --account', 'account action')
  .description('List all buckets.')
  .action(core.ls)

cown
  .command('use <name>')
  .option('-a, --account', 'account action')
  .description('Checkout bucket.')
  .action(core.use)

cown
  .command('rm <name>')
  .option('-a, --account', 'account action')
  .description('Remove bucket.')
  .action(core.rm)

cown
  .command('upload <source>')
  .description('Upload file')
  .option('-b, --bucket <bucket>', 'bucket')
  .action(core.upload)

cown.parse(process.argv)