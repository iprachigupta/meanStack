const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    shortDesc: String,
    description: String,
    price: Number,
    discount: Number,
    rating: Number,
    images: Array(String),
    categoryId : { type: mongoose.Schema.Types.ObjectId, ref: "categories"},
    brandId : { type: mongoose.Schema.Types.ObjectId, ref: "brands"},
}, {timestamps: true});

const Product = mongoose.model("products", productSchema);

module.exports = Product; 
