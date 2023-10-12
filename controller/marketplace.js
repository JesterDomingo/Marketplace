const product = require("../models/product")

//Post all
const getProduct = async (req, res) => {
    try{
        const products = await product.find()
        res.status(200).json({success: true, data: products})
    }catch(error){
        res.status(409).json({success:false, data: [], error: error})
    }
}

//Post id
const getProducts = async (req, res) => {
    const productId = req.params.productId
    try{
        const Product = await product.find({_id: productId})
        res.status(200).json({success: true, data: Product})
    }catch(error){
        res.status(409).json({success:false, data: [], error: error})
    }
}

//Delete all
const deleteProduct = async(req, res) =>{
    try{
        const products = await product.deleteMany();
        res.status(200).json({success: true, data: products})
    }catch(error){
        res.status(409).json({success:false, data: [], error: error})
    }
}

//Delete id
const deleteProducts = async (req, res) => {
    const productId = req.params.productId
    try{
        const Product = await product.deleteOne({_id: productId})
        res.status(200).json({success: true, data: Product})
    }catch(error){
        res.status(409).json({success:false, data: [], error: error})
    }   
}

//Get using name
const getProductName = async (req, res) => {
    const name = req.query
    const query = {}
    if(name) query.name = name
    try{
        const display = await display.find({name})
        res.status(200).json({success: true, data: display})
    }catch(error){
        res.status(409).json({success:false, data: [], error: error})
    }   
}

//Put id - BROKEN(?)
const updateProducts = async (req, res) =>{
        const productid = req.params.productId
        const {name} = req.body
        const {description} = req.body
        const {price} = req.body
        const {quantity} = req.body
        const {category} = req.body

    try{
        const updateItem = await product.updateOne({_id: productid}, {$set: {
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            category: category
        }})
        
        const updatedItemData = await product.find({_id: productid})
        res.status(201).json({success: true, data: updatedItemData})
    }
    catch(error) {
        res.status(409).json({success: false, data: [], error: error})
    }
}


//Adding products
const addProduct = async (req, res) => {
    try{
        const {name} = req.body
        const {description} = req.body
        const {price} = req.body
        const {quantity} = req.body
        const {category} = req.body

        const newProduct = new product({
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            category: category
        })

        const saveProducts = await newProduct.save()
        res.status(201).json({success: true, data: saveProducts})
    }
    catch(error) {
        res.status(409).json({success: false, data: [], error: error})
    }
}

module.exports = {
    addProduct, //post
    getProduct, //get
    getProducts, //get id
    deleteProduct, //delete
    deleteProducts, //delete id
    updateProducts, //Put id
    getProductName //Get name

}