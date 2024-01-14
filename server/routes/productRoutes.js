const express = require("express");
const router = express.Router();

const Product = require("../models/Product");

router.use(express.json());

// User View All Products
router.get("/view-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// User View Product by ID
router.get("/view-product/:productId", async (req, res) => {
  try {
    const productId = req.params.productId;
    const product = await Product.findById(productId);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Merchant Upload Product
router.post("/upload-product", async (req, res) => {
  try {
    const { name, description, category, subcategory, price, location, userid } =
      req.body;
    const product = new Product({
      name,
      description,
      category,
      subcategory,
      price,
      location,
      userid,
    });
    await product.save();
    res.status(201).json({ message: "Product uploaded successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Merchant Edit Product
router.put("/edit-product/:productId", async (req, res) => {
  try {
    const { name, description, category, subcategory, price, location } =
      req.body;
    const productId = req.params.productId;
    await Product.findByIdAndUpdate(productId, {
      name,
      description,
      category,
      subcategory,
      location,
      price,
    });
    res.status(200).json({ message: "Product updated successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// User Search Products
router.get("/search-products", async (req, res) => {
  try {
    const { category, subcategory, price, location } = req.query;
    const query = {};
    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    if (price) query.price = { $lte: parseInt(price) };
    if (location) query.location = location;

    const products = await Product.find(query);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
