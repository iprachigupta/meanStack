const Product = require('../models/product');

async function addProduct(model) {
    const product = new Product({
        ...model,
    })
    await  product.save();
    return product.toObject();
};

r
async function updateProduct(id, model) {
    await Product.findByIdAndUpdate(id, model)
};

async function deleteProduct(id) {
    await Product.findByIdAndDelete(id)
};

async function getProduct(id) {
    const product = await Product.findById(id);
    return product;
};

async function getAllProducts() {
    const products = await Product.find();
    return products;
};

module.exports = {addProduct, deleteProduct, updateProduct, getProduct, getAllProducts};
