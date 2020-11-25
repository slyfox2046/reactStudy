const express = require("express");
const router = express.Router();
// 这里的路径是route 下的路径
router.get("/", (req, res) => { 
  res.send({
    msg:"Hello"
  })
})
module.exports = router;