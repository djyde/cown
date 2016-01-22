'use strict'

const qn = require('qn')
const db = require('../db')
const colors = require('colors')

module.exports = function(source, options){

  let usingAccount = db('accounts').chain().find({using: true})

  if (!usingAccount || db('accounts').size() === 0) {
    console.log('No account yet! Use `$ cown add` to add an account.')
    return
  }

  let defaultBucket, origin

  usingAccount.value().buckets.map((bucket) => {
    if (bucket.isDefault) {
      defaultBucket = bucket.name
      origin = bucket.domain
    }
  })

  if (!defaultBucket || !origin) {
    console.log('No using bucket! Use `$ cown use <name>` to use a bucket.')
    return 
  }

  const bucket = options.bucket || defaultBucket

  const accessKey = usingAccount.value().accessKey
  const secretKey = usingAccount.value().secretKey

  let client = qn.create({
    accessKey, secretKey, bucket, origin
  })

  let filename = source.split('/')[source.split('/').length - 1]
  client.uploadFile(source, {key: filename }, (err, result) => {
    if (err) {
      switch(err.code){
        case 401:
          console.log(colors.red(err.name + ':'), 'bad token')
          break
        case 413:
          console.log(colors.red(err.name + ':'), 'file too large')
          break
        case 614:
          console.log(colors.red(err.name + ':'), 'file exist')
          break
        default:
          console.log(colors.red('Unknown Error'), err.code)
          break
      }
    } else {
      console.log(result)
    }
  })
}