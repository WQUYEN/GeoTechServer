const accountRouter = require("./account.router");
const productRouter = require("./product.router");
const cartRouter = require("./cart.router");

module.exports = (app) => {
    
    app.use("/accounts", accountRouter);
    app.use("/products", productRouter);
    app.use("/cart", cartRouter);
}