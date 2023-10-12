const express = require('express');
const{home} = require("../controller/marketplace");
const {api} = require("../controller/marketplace");


router = express.Router();

router.get("/", home)
router.post("/add", api)

module.exports = router