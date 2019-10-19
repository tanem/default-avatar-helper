'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./default-avatar-helper.cjs.production.js')
} else {
  module.exports = require('./default-avatar-helper.cjs.development.js')
}
