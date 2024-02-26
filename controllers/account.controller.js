const Account = require('../models/account');


// get all account
const getAccounts = async (req, res) => {
    try {

        const accounts = await Account.find();
        if (accounts.length == 0) {
            return res.status(404).json({
                message: "accounts not found",
            });
        }
        return res.status(200).json({
            message: "accounts found",
            datas: accounts,
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
}
//create a new account
const createAccount = async (req, res, next) => {
    try {
    //   const user = req.user;
    //   if (user.role_id != "admin") {
    //     return res.status(403).json({
    //       code: 403,
    //       message: "You do not have permission to use this function",
    //     });
    //   }
      const { email, password, role_id } = req.body;
    //   const salt = await bcrypt.genSalt(10);
    //   const passwordHash = await bcrypt.hash(password, salt);
      const newAccount = await Account.create({
        email: email,
        password: password,
        role_id: "customer",
        is_active: true,
        isVerify: true,
      });
      return res
        .status(201)
        .json({ code: 201, result: newAccount, message: "created successfully" });
    } catch (error) {
      return res.status(500).json({ code: 500, message: error.message });
    }
  };

//see details account 
const detailProfile = async (req, res, next) => {
    try {
        const uid = req.params.uid;
        const user = await Account.findById(uid);
        if (!user) {
            return res.status(404).json({ code: 404, message: "User not found" });
        }
        return res
            .status(200)
            .json({ code: 200, data: user, message: "get user success" });
    } catch (error) {
        return res.status(500).json({ code: 500, message: error.message });
    }
};
// edit profile 
const editProfile = async (req, res, next) => {
    try {
        const uid = req.params.uid;
        const user = await Account.findById(uid);
        if (!user) {
            return res.status(404).json({ code: 404, message: "User not found" });
        }
        const dataUpdate = req.body;
        const data = await Account.findByIdAndUpdate(uid, dataUpdate, {
            new: true,
        });
        return res
            .status(200)
            .json({ code: 200, data: data, message: "update successful" });
    } catch (error) {
        return res.status(500).json({ code: 500, message: error.message });
    }
};
module.exports = { getAccounts, detailProfile, editProfile, createAccount }