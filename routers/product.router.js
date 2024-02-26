const express = require('express');
const Routers = express.Router();
const { getAllProduct,addProduct} = require('../controllers/product.controller');

Routers.get('/', getAllProduct);
Routers.post('/add',addProduct);
module.exports = Routers;
