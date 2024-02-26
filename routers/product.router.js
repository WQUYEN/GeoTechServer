const express = require('express');
const Routers = express.Router();
const { getAllProduct} = require('../controllers/product.controller');

Routers.get('/', getAllProduct);
module.exports = Routers;
