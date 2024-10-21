const mongoose = require("mongoose")

//  Creating a schema

const productSchema = new mongoose.Schema({
    p_name:{
        type: String,
        require: true
    },
    price : {
        type: Number,
        require: true
    },
    description : {
        type: String,
        default: "Default Description"

    }
})

const product = mongoose.model("Product", productSchema)

module.exports = Product;
