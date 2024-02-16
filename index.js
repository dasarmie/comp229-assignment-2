const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send({"message": "Welcome to DressStore application"})
});

app.post('/api/products', async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
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