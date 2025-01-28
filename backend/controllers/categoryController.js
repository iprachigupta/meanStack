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

module.exports = {addCategory, updateCategory, deleteCategory};