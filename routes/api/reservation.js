var db = require("../../models");

module.exports = function (app) {
  // Get all prices
  app.post("/api/reservation", function (req, res) {
    db.Reservation.create(req.body)({
      firstName: req.params.firstName,
      lastName: req.params.lastName,
      addressLine1: req.params.addressLine1,
      addressLine2: req.params.addressLine2,
      city: req.params.city,
      state: req.params.state,
      zip: req.params.zipCode,
      phoneNo: req.params.phoneNo,
      email: req.params.email,
      destination: req.params.destination,
      roundtrip: req.params.roundtrip,
      price: req.params.price,
      reservationNo: req.params.reservationNo
    }).then(function (dbPrice) {
      console.log(res.json(dbPrice));
    });
  });
}