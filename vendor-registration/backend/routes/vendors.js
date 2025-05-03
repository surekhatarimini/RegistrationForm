const express = require('express');
const router = express.Router();
const Vendor = require('../models/Vendor');

// POST: Create a new vendor
router.post('/', async (req, res) => {
  try {
    const newVendor = new Vendor(req.body);
    await newVendor.save();
    res.status(201).json(newVendor);  // Send the created vendor back in the response
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
