const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const vendorRoutes = require('./routes/vendors'); // ✅ Make sure this path is correct!

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// ✅ Route registration
app.use('/api/vendors', vendorRoutes);

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/vendorDB').then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
  console.error(err);
});
