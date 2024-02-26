const mongoose = require('mongoose');

const optionSchema = new mongoose.Schema(
  {
    product_id: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
    name_color: { type: String },
    color_code: { type: String },
    image: { type: String },
    price: { type: Number },
    discount_value: { type: Number, default: 0 },
    quantity: { type: Number }, // số lượng của sản phẩm
    soldQuantity: { type: Number, default: 0 }, // số lượng đã bán
    hot_option: { type: Boolean, default: false }, // option tốt nổi bật nhất
  },    
  { timestamps: true }
);

const option = mongoose.model("option", optionSchema);

module.exports = option;
