const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  description: String,
  price: Number,
  discount: Number,
  brand: String,
  modelNumber: String,
  category: String,
  subCategory: String,
  stock: Number,
  batchNumber: String,
  expiryDate: Date,
  images: [String],
  manufacturer: String,
  dimensions: String,
  warranty: String,
  shippingInfo: String,
  technicalDetails: Object,
  isAvailable: { type: Boolean, default: true },
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;
