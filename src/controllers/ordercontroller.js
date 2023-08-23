const Order = require('../models/order');

const addOrder = async (req, res) => {
  try {
    const { user_id, subTotal,  name } = req.body;

    const newOrder = new Order({
       user_id,
      subTotal,
       name,
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { user_id } = req.query;
    const orders = await Order.find({ user: user_id });

    res.json({ orders });
  } catch (error) {
    res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  addOrder,
  getOrderDetails,
};
