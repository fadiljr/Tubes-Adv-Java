const Barang = require("../models/productsModel");
const catchAsync = require("./../utils/catchAsync");
const { promisify } = require("util");
const AppError = require("../utils/appError");

exports.getAllBarang = catchAsync(async (req, res, next) => {
  const barang = await Barang.find();

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: barang.length,
    data: {
      barang,
    },
  });
});

exports.getBarang = catchAsync(async (req, res, next) => {
  const barang = await Barang.findById(req.params.id);

  // SEND RESPONSE
  res.status(200).json({
    status: "success",
    results: barang.length,
    data: {
      barang,
    },
  });
});

exports.updateBarang = catchAsync(async (req, res, next) => {
  // 1) Get barang from collection
  const barang = await Barang.findById(req.params.id);

  // 3) if so, update password
  barang.jumlah = req.body.jumlah;
  await barang.save();
  // User.findByIdAndUpdate will NOT work as intended!
  res.status(200).json({
    status: "success",
    data: {
      barang,
    },
  });
});

exports.insertBarang = catchAsync(async (req, res, next) => {
  try {
    const newBarang = await Barang.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        newBarang,
      },
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
});
