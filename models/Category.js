const mongoose = require("mongoose");

const Category = new mongoose.Schema({
    name: { type: String, require: true },
    image: { type: String },
    product: [{ type: db.mongoose.Schema.Types.ObjectId, ref: "product" }]
}, {
    timestamps: true,
});


const category = mongoose.model("category", Category);
module.exports = category

