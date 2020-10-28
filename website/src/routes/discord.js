const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello! This is Discord!");
});

module.exports = router;
