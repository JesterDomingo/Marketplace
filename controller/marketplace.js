const product = require("../models/product")

//adding products inside the catalog
const api = async (req, res) => {
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
        res.status(201).json({success: true, data: savedProducts})
    }
    catch(error) {
        res.status(409).json({success: false, data: [], error: error})
    }
}

const home = (req, res) => {
    res.json({message:"Welcome to DressStore application."})
};

module.exports = {
    home,
    api
}