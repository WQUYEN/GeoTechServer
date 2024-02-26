const mongoose = require("mongoose");
 
const cartSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "account" },
    option_id: { type: mongoose.Schema.Types.ObjectId, ref: "option" },
    quantity: {type: Number}
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;