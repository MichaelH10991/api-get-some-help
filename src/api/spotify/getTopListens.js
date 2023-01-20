const init = (router) => {
  const getTopListens = (req, res) => {
    res.send('hello')
  }

  router.get('/get_top_listens', getTopListens)

  return router
}

module.exports = { init }