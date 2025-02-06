const express = require('express')
const router = express.Router();
const { addCategory, updateCategory, deleteCategory, getCategories, getCategoryById } = require('../controllers/categoryController');

//add category
router.post("/add", async (req , res)=>{
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

//get 
router.get('/' , async(req, res)=>{
    const categories = await getCategories();
    res.status(200).json({categories})
});

router.get('/:id', async (req, res)=>{
    const category = await getCategoryById(req.params['id']);
    res.status(200).json({category});
});

module.exports = router;