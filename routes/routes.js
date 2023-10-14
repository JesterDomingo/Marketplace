const express = require('express');
const {addProduct, getProduct, getProducts, deleteProduct, deleteProducts, updateProducts, getProductName} = require("../controller/marketplace");


router = express.Router();

//GET FUNCTIONS
router.get("/products", getProduct) //show all items
router.get("/products/:productId", getProducts) //show specific item by id
router.get("/product/:keyword", getProductName);//show specific item by name --broken

//POST FUNCTION
router.post("/products", addProduct) //add item

//PUT FUNCTION
router.put("/products/:productId", updateProducts) //update item based on id

//DELETE FUNCTIONS
router.delete("/products", deleteProduct) //deletes all product
router.delete("/products/:productId", deleteProducts) //deletes product based on id

module.exports = router