const Yeuthich = require('../models/yeuthich');
const addFavorite = async (req, res, next) => {
  try {
    const { user_id, product_id } = req.body;

    const newFavorite = new Yeuthich({
      user_id,
      product_id,
    });

    await newFavorite.save();

    return res.status(201).json({ code: 201, message: "Thêm sản phẩm vào danh sách yêu thích thành công." });
  } catch (error) {
    return res.status(500).json({ code: 500, message: error.message });
  }
};

const removeFavorite = async (req, res, next) => {
  try {
    const { favoriteId } = req.params;

    const favorite = await Yeuthich.findByIdAndRemove(favoriteId);
    if (!favorite) {
      return res.status(404).json({ code: 404, message: "Yêu thích không tồn tại." });
    }

    return res.status(200).json({ code: 200, message: "Xóa sản phẩm khỏi danh sách yêu thích thành công." });
  } catch (error) {
    return res.status(500).json({ code: 500, message: error.message });
  }
};
const checkFavoriteExists = async (req, res, next) => {
  try {
    const { user_id, product_id } = req.body;

    const favorite = await Yeuthich.findOne({ user_id, product_id });
    const exists = !!favorite;

    return res.status(200).json({ exists });
  } catch (error) {
    return res.status(500).json({ code: 500, message: error.message });
  }
};

module.exports = {
  addFavorite,
  removeFavorite,
  checkFavoriteExists
};