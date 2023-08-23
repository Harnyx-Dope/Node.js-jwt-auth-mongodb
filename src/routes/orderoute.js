const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordercontroller');
const authMiddleware = require('../utils/authmiddleware');

router.post('/add-order', authMiddleware, orderController.addOrder);
router.get('/get-order', authMiddleware, orderController.getOrderDetails);

module.exports = router;
