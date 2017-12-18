// key.js - figure out what set of credentials to return
console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  // We are in production - return prod keys
  module.exports = require('./prod');
} else {
  // We are in development - return dev keys
  module.exports = require('./dev');
}
