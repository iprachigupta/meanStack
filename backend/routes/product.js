const express = require('express');
const router = express.Router();
const { addProduct, updateProduct, deleteProduct, getAllProducts, getProduct } = require('../controllers/productController')

router.post('/add', async(req, res)=>{
    const product = await addProduct(req.body);
    res.send(product);
});

router.put('/:id', async (req, res)=>{
    await updateProduct(req.params['id'], req.body);
    res.send("Product updated")
});

router.delete('/:id', async (req, res)=>{
    await deleteProduct(req.params['id']);
    res.send("Product deleted");
})

router.get('', async (req, res)=>{
    const products = await getAllProducts();
    res.send(products);
})

router.get('/:id', async (req, res)=>{
    const product = await getProduct(req.params['id']);
    res.send(product);
})

module.exports = router;
