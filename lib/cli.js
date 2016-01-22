#!/usr/bin/env node
'use strict'

const cown = require('commander')
const core = require('./core')

cown
  .version(require('../package.json').version)
  .command('add')
  .action(core.add)

cown.parse(process.argv)