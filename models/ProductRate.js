const mongoose = require('mongoose');

const productRateSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "account" },
    content: { type: String },
    image: [{ type: String }],
    rate: { type: Number, min: 1, max: 5 },
  },
  {
    timestamps: true,
  }
);


const productRate = mongoose.model("productRate", productRateSchema);
module.exports = { productRate };
