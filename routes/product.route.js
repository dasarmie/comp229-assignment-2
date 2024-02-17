const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const { getAllProducts, getProduct, createProduct, updateProduct, deleteProduct, deleteAllProducts } = require('../controllers/product.controller.js');

router.get('/', getAllProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);
router.delete('/', deleteAllProducts);

module.exports = router;