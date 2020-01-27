const express = require("express");
const routes  = express.Router()
const app = express();

const PaymentController = require('../controllers/PaymentController')

routes.get("/", (req, res) => {
    res.render('payment');
});

routes.get("/checkout-session", PaymentController.checkout);

routes.post("/create-checkout-session", PaymentController.create);

routes.get("/public-key", PaymentController.public);
  
routes.get("/success", PaymentController.store)
module.exports = routes