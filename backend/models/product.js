const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    shortDesc: String,
    description: String,
    purchasePrice: Number,
    sellingPrice: Number,
    images: Array(String),
    categoryId : { type: Schema.Types.ObjectId, ref: "categories"},
}, {timestamps: true});

const Product = mongoose.model("products", productSchema);

module.exports = Product;