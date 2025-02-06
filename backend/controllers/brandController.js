const Brand = require('../models/brand')

async function getBrands (){
    const brands = await Brand.find();
    return brands;
};

async function getBrand(id){
    const brand = await Brand.findById(id);
    return brand;
}

async function addBrand(model){
    const brand = new Brand({
        name: model.name,
    })
    await brand.save();
    return brand.toObject();
}

async function updateBrand(id, model){
    await Brand.findByIdAndUpdate(id, model);
}

async function deleteBrand(id){
    await Brand.findByIdAndDelete(id);
}

module.exports = {getBrands, getBrand, updateBrand, addBrand, deleteBrand}