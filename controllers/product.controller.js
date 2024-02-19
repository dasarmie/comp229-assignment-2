/* 
  File: product.controller.js
  Student's Name: Diego Sarmiento
  Student ID: 301379640
  Date: 02/19/2024
*/

const Product = require('../models/product.model.js');

// Get all products (api/products)

const getAllProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Get product by id (api/products/:id)

const getProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Add new product (api/products)

const createProduct = async(req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Update product by id (api/products/:id)

const updateProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndUpdate(id, req.body);
        if (!products) {
            return res.status(404).json({message: "Product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Remove product by id (api/products/:id)

const deleteProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findByIdAndDelete(id);
        if (!products) {
            res.status(404).json({message: "Product not found"});
        }
        res.status(200).json({message: "Product delete successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Remove all products (api/products)

const deleteAllProducts = async(req, res) => {
    try {
        const products = await Product.deleteMany({});
        res.status(200).json({message: "All products deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

// Find all products which name contains 'Kw' (api/products?name=[Kw])

const productContainsKw = async(req, res) => {
    const { name } = req.query;
    try {
        const products = await Product.find({ name: { $regex: new RegExp(name, 'i') }});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts,
    productContainsKw
};