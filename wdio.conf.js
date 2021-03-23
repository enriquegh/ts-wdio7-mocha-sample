require('ts-node').register({ files: true })
require('global-agent/bootstrap')
module.exports = require('./wdio.main.conf');