const mongoose = require("mongoose")

module.exports = connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://vvq862003:md07geotechstore@cluster0.1v0cvxq.mongodb.net/GeotechStore")
        console.log("kết nối db thành công");
    } catch (error) {
        console.log("lỗi kết nối db: " + error.message);
    }

}