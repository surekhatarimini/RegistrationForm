const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  category: { type: String, required: true },
  address: { type: String, required: true },
  taxId: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  contractStart: { type: Date, required: true },
  isActive: { type: Boolean, default: true }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
