const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Images")
});

router.post("/", (req, res) => {
  console.log(req, res)
  res.send("GOT IT")
});

module.exports = router;