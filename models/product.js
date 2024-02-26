const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    status: { type: String, required: true, enum: ["mới", "cũ"] }, //mới, cũ
    discounted: { type: Boolean, default: false }, //có giảm giá hay không
    is_active: { type: Boolean },
    screen: { type: String },
    camera: { type: String },
    chipset: { type: String },
    ram: { type: Number },
    rom: { type: Number },
    battery: { type: String },
    connection: { type: String },
    manufacturer: { type: String },
    other: { type: String },
    option: [{ type: mongoose.Schema.Types.ObjectId, ref: "option" }],
    product_review: [
        { type: mongoose.Schema.Types.ObjectId, ref: "productRate" },
    ],
},
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Products', productSchema);

module.exports = Product;