var express = require('express');
var router = express.Router();
const user =  require("./handler/user");

/* GET users listing. */
router.post("/login", user.login);

module.exports = router;
