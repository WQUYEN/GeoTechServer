var express = require("express");
var router = express.Router();
var controller = require("../controllers/yeuthich.controller");
var middleware = require("../middleware/auth.middleware");

router.post("/themyeuthich", controller.addFavorite);
router.delete("/:favoriteId", controller.removeFavorite);
router.post("/checkyeuthich", controller.checkFavoriteExists);

module.exports = router;