const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  subTotal: Number
  
});

module.exports = mongoose.model('Order', orderSchema);
