var db = require("../../models");

module.exports = function (app) {
  // Get all prices
  app.get("/api/price/:zipcode/:destination", function (req, res) {
    var destination = req.params.destination;

    // Find all zip codes within the MySQL table
    db.Price.findAll({

      // Assigns the attribute that serves as a SELECT query in MySQL
      attributes: [destination],
      // Selects the row that matches that zip code
      where: {
        zipcode: req.params.zipcode,
      }
    }).then(function (dbPrice) {
      console.log(res.json(dbPrice));
    });
  });
}