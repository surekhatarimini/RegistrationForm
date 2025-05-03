const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema({
  vendorName: String,
  contactPerson: String,
  email: String,
  phone: String,
  category: String,
  address: String,
  taxId: String,
  paymentMethod: String,
  contractStart: Date,
  isActive: Boolean,
});

module.exports = mongoose.model("Vendor", vendorSchema);
