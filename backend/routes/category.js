const express = require('express')
const router = express.Router();
const Category = require('../models/category');
const { addCategory, updateCategory, deleteCategory } = require('../controllers/categoryController');

//add category
router.post("", async (req , res)=>{
    const model = req.body;
    const response = await addCategory(model);
    res.status(200).json(response);
});

//update category
router.put("/:id", async (req , res)=>{
    await updateCategory(req.params['id'] , req.body)
    res.status(200).json({message: "Category Updated."})
});

//delete category
router.delete("/:id", async (req, res)=>{
    await deleteCategory(req.params['id']);
    res.status(200).json({ message: "Category Deleted"});
});

//get category

module.exports = router;