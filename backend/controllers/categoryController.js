const Category = require('../models/category')

async function addCategory(model){
    let category = new Category({
        name: model.name,
    })
    await category.save();
    return category.toObject();
}

async function updateCategory(id, model){
    await Category.findByIdAndUpdate({_id : id}, model);
    return;
}

async function deleteCategory(id){
    await Category.findByIdAndDelete({_id: id});
    return;
}

async function getCategories(){
    const categories = await Category.find();
    return categories;
}

async function getCategoryById(id) {
    const category = await Category.findById(id);
    return category;
}

module.exports = {addCategory, updateCategory, deleteCategory, getCategories, getCategoryById};