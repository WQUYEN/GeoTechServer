//Khởi tạo server và chạy
const express = require('express');
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary');
const multer = require('multer');
const connectDB = require('./config/ConnectDB');
const routers = require('./routers');
const productRouter = require('./routers/product.router'); // Đổi tên biến Router thành userRouter

const app = express();
const port = 8000;
//app.use
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(bodyParser.json());
//connectDB 
connectDB();

// router 
routers(app);






app.listen(port, () => {
    console.log(`Server running at the ${port}`);
});