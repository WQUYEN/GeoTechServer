const express = require("express");

const router = express.Router();

const {getAccounts, createAccount, editProfile} = require('../controllers/account.controller');

router.route("/").get(getAccounts);
router.route("/create").post(createAccount);
router.route("/edit-profile/:uid").put(editProfile);
module.exports = router;