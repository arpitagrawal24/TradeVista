const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: {
    type: String,
    default: "No description provided.",
  },
  category: String,
  subcategory: String,
  price: Number,
  location: String,
  Image:{
    type: String,
    default: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
