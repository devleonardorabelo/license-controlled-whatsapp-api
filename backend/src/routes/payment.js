const express = require('express');
const routes  = express.Router();
const app     = express();

const authMiddleware    = require('../middlewares/auth');

const PaymentController = require('../controllers/PaymentController');

routes.use(authMiddleware);
routes.get("/", PaymentController.index);
routes.post("/", PaymentController.store);
module.exports = routes;