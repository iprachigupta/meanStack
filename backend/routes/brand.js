const express = require('express');
const router = express.Router();
const { addBrand, updateBrand, deleteBrand, getBrand, getBrands } = require('../controllers/brandController');

router.post('/add',async(req ,res)=>{
    const result = await addBrand(req.body);
    res.send(result);
});

router.put('/:id',async(req ,res)=>{
    const result = await updateBrand(req.params['id'], req.body);
    res.send({message: 'Brand Updated'});
});

router.delete('/:id',async(req ,res)=>{
    deleteBrand(req.params['id']);
    res.send({message: 'Brand deleted'});
});

router.get('/:id',async(req ,res)=>{
    const brand = await getBrand(req.params['id']);
    res.send(brand);
});

router.get('',async(req ,res)=>{
    const brands = await getBrands(req.params['id']);
    res.send(brands);
});

module.exports = router;