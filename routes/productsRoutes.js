const express = require("express");
const productsController = require("./../controllers/productsController");
const authController = require("./../controllers/authController");

const router = express.Router();

router.get(
  "/allBarang",
  authController.protect,
  productsController.getAllBarang
);

router
  .route("/insertBarang")
  .post(
    authController.protect,
    authController.restrictTo("admin"),
    productsController.insertBarang
  );
router.get("/:id", authController.protect, productsController.getBarang);

router
  .route("/updateBarang/:id")
  .put(
    authController.protect,
    authController.restrictTo("admin"),
    productsController.updateBarang
  );
module.exports = router;
