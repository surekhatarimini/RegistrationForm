const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vendorRoutes = require('./routes/vendors');

const app = express();
const PORT = 3000;

// Update MongoDB connection (remove deprecated options)
mongoose.connect('mongodb://localhost:27017/vendorDB')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use(cors());
app.use(express.json());

// Define the route for vendors
app.use('/api/vendors', vendorRoutes); // Ensure this matches with frontend

app.get('/', (req, res) => {
  res.send('Vendor Registration API is running 🚀');
});

// Start the server
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});
