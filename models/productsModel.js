const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const productsSchema = new mongoose.Schema({
  jenis: {
    type: String,
    required: [true, "Please tell us your product name"],
  },
  warna: {
    type: String,
    required: [true, "Masukan Warna"],
  },
  supplier: {
    type: String,
    required: [true, "Please provide your supllier"],
  },
  jumlah: Number,

  kodeBarang: {
    type: String,
  },
});
const Products = mongoose.model("Product", productsSchema);

module.exports = Products;
