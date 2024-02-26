const Product = require('../models/product');

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

// const getAllProduct = async (req, res) => {
//     try {
//         const comics = await Product.find();

//         if (comics.length === 0) {
//             return res.status(404).json({
//                 message: "Product not found",
//             });
//         }
//         res.json(comics);
        
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server Error' });
//     }
// };
module.exports = { getAllProduct }
