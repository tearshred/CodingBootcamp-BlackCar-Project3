const router = require("express").Router();
const priceRoutes = require("./price");
const reservationRoutes = require("./reservation");

// Price routes
router.use("/price", priceRoutes);
router.use("/reservation", reservationRoutes);

module.exports = router;
