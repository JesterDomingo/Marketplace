const express = require('express');
const {addProduct, getProduct, getProducts, deleteProduct, deleteProducts, updateProducts, getProductName} = require("../controller/marketplace");


router = express.Router();

//GETS
router.get("/products", getProduct)
router.get("/products/:productId", getProducts)
router.get("/products?name=[]", getProductName)
//POST
router.post("/products", addProduct)
//PUT
router.put("/products/:productId", updateProducts)
//DELETE
router.delete("/products", deleteProduct)
router.delete("/products/:productId", deleteProducts)

module.exports = router