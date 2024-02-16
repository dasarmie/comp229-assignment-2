const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send({"message": "Welcome to DressStore application"})
});

app.get('/api/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.get('/api/products/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/products', async(req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/products/:id', async(req, res) => {
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
});

app.delete('/api/products/:id', async(req, res) => {
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
});

mongoose.connect("mongodb+srv://DiegoSarmiento:4TESTMLTg07019zg@cluster.ymcpawt.mongodb.net/DressStore?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to Dress Store database");
    app.listen(8080, () => {
        console.log('Server is running on port 8080')
    });
})
.catch(() => {
    console.log("Connection failed!");
});