const fs = require('fs');
const spotify = require('./spotify');
const dir = fs.readdirSync(`${__dirname}`).filter(file => file !== 'index.js');

console.log(dir)
module.exports = { 
  init: (app, router) => {
    dir.map(file => {
      const module = require(file)
      if(!module.init){
        throw new Error('must have an init')
      }
      app.use(module.mount, module.init && module.init(router))
    })
  }
}