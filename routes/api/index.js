const router = require("express").Router();
const priceRoutes = require("./price");

// Price routes
router.use("/price", priceRoutes);

module.exports = router;
