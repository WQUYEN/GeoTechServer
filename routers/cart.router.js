var express = require("express");
var router = express.Router();
var cartController = require("../controllers/cart.controller");

router.get(
  "/all-cart-user",
  cartController.listCartForUser
);
router.post(
  "/create-cart-item",
  cartController.createCartItem
); //add
router.put(
  "/update-quantity/:id",
  cartController.updateCartItemQuantity
); //edit
router.delete(
  "/delete-cart-item/:id",
  cartController.deleteCartItem
); //delete

module.exports = router;
