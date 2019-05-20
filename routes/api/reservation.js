var db = require("../../models");

module.exports = function (app) {
  // Posts all the information into the Reservation table
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
      reservationNo: req.body.reservationNo
    }).then(function (dbReservation) {
      return res.json(dbReservation)
      console.log(res.json(dbReservation));
    });
    console.log(req);
  });

  // Get method for obtaining all reservation numbers in order to generate a unique one
  app.get("/api/reservation/:reservationNo", function (req,res){

    var reservationNo = req.params.reservationNo;

    // Obtaining all reservation numbers in the column `reservationNo`
    db.Reservation.findAll({
        
      attributes: [reservationNo],

    }).then(function(dbReservation){
      return res.json(dbReservation);
    })
    console.log(req);
  });

  // Obtaining a specific reservation number
  app.get("/api/reservation/:email/:emailaddress/:reservationNo/:customerReservationNumber", function (req, res) {

    // Finding the specific value based on the parameters below
    db.Reservation.findAll({

      where: {
        // SELECT `email`, `reservationNo` FROM `Reservations` AS `Reservation` WHERE `Reservation`.`email` = email.req.params.emailaddress
        email: req.params.emailaddress,

        // Same SELECT method but for `reservationNo` based on customer reservation number
        reservationNo: req.params.customerReservationNumber
      }
    }).then(function (dbReservation) {
      return res.json(dbReservation);
    })
    console.log(req);
  });
}