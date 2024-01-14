const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  subcategory: String,
  price: Number,
  location: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
