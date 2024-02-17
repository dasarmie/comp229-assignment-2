const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const ProductRoute = require('./routes/product.route.js');
const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/products', ProductRoute);

app.get('/', (req, res) => {
    res.send({"message": "Welcome to DressStore application"})
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