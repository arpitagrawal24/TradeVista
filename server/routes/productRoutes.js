const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.use(express.json());

// Merchant Upload Product
router.post('/upload-product', async (req, res) => {
  try {
    const { name, category, subcategory, price, location } = req.body;
    const product = new Product({ name, category, subcategory, price, location });
    await product.save();
    res.status(201).json({ message: 'Product uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Merchant Edit Product
router.put('/edit-product/:productId', async (req, res) => {
  try {
    const { name, category, subcategory, price, location } = req.body;
    const productId = req.params.productId;
    await Product.findByIdAndUpdate(productId, { name, category, subcategory, price, location });
    res.status(200).json({ message: 'Product updated successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// User Search Products
router.get('/search-products', async (req, res) => {
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
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
