const Product = require('../models/product');
const Category = require('../models/Category');

const getAllProduct  = async (req, res) => {
    try {

        const products = await Product.find();
        if (products.length == 0) {
            return res.status(404).json({
                message: "Product not found",
            });
        }
        return res.status(200).json({
            message: "Product found",
            datas: products,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

const addProduct = async (req, res, next) => {
    try {
      const dataBody = req.body;
      const category = await Category.findById(
        dataBody.category_id
      );
      con
      if (!category) {
        return res.status(404).json({ code: 404, message: "no found category!" });
      }
      
      if (!dataBody.name) {
        return res.status(404).json({ code: 404, message: "name is required" });
      }
      if (!dataBody.manufacturer) {
        return res
          .status(404)
          .json({ code: 404, message: "manufacturer is required" });
      }
      if (!dataBody.status) {
        return res.status(404).json({ code: 404, message: "status is required" });
      }
      const product = new productModel.product({ ...dataBody});
      await product.save();
      console.log(product);
      category.product.push(product._id);
      await category.save();
      return res.status(201).json({
        code: 201,
        result: product,
        message: "created product successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ code: 500, message: error.message });
    }
  };
module.exports = { getAllProduct,addProduct }
