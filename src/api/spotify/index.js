const getTopListens = require('./getTopListens')

module.exports = {
  mount: '/spotify',
  init: (router) => getTopListens.init(router)
}