const express = require('express');
const {home, api, products} = require("../controller/marketplace");


router = express.Router();

router.get("/", home)
router.post("/add", api)

module.exports = router