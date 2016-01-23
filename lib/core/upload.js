'use strict'

const qn = require('qn')
const db = require('../db')
const utils = require('../utils')
const colors = require('colors')
const ncp = require('copy-paste')

module.exports = function(source, options){

  let usingAccount = db('accounts').chain().find({using: true})

  if (!usingAccount || db('accounts').size() === 0) {
    console.log('No account yet! Use `$ cown add` to add an account.')
    return
  }

  let usingBucket, origin

  usingAccount.value().buckets.map((bucket) => {
    if (options.bucket) {
      if (options.bucket === bucket.name) {
        usingBucket = bucket.name
        origin = bucket.domain
      }
    } else {
      if (bucket.isDefault) {
        usingBucket = bucket.name
        origin = bucket.domain
      }
    }
  })

  if (!usingBucket || !origin) {
    console.log('No using bucket! Use `$ cown use <name>` to use a bucket.')
    return 
  }

  console.log(usingBucket, origin)

  const accessKey = usingAccount.value().accessKey
  const secretKey = usingAccount.value().secretKey

  let client = qn.create({
    accessKey, secretKey, origin,
    bucket: usingBucket
  })

  let filename = source.split('/')[source.split('/').length - 1]
  client.uploadFile(source, {key: filename }, (err, result) => {
    if (err) {
      utils.showError(err)
    } else {
      console.log(colors.green('Upload success!'))
      console.log(result.url)

      if (options.copy) {
        ncp.copy(result.url)
      }
    }
  })
}