const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
            default: 0,
        },

        published: {
            type: Boolean,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;