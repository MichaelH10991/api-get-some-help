const init = (router) => {
  const getTopListens = (req, res) => {
    // ui wil request and send tokens
    res.send("hello");
  };

  router.get("/get_top_listens", getTopListens);

  return router;
};

module.exports = { init, name: "spotify" };
