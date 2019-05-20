var db = require("../../models");

module.exports = function (app) {
  // Get all prices
  app.post("/api/reservation", function (req, res) {
    db.Reservation.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      addressLine1: req.body.addressLine1,
      addressLine2: req.body.addressLine2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      phoneNo: req.body.phoneNo,
      email: req.body.email,
      destination: req.body.destination,
      roundtrip: req.body.roundtrip,
      price: req.body.price,
      reservationNo: req.reservationNo
    }).then(function (dbReservation) {
      return res.json(dbReservation)
      console.log(res.json(dbReservation));
    });
  });
}