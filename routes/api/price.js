var db = require("../../models");

module.exports = function (app) {
  // Get all prices
  app.get("/api/price/:zipcode/:destination", function (req, res) {
    var destination = req.params.destination;

    // Find all zip codes within the MySQL table
    db.Price.findOne({
      plain: true,
      // Assigns the attribute that serves as a SELECT query in MySQL
      attributes: [destination],
      // Selects the appropriate zip code
      where: {
        zipcode: req.params.zipcode,
      }
    }).then(function (dbPrice) {
      return res.json(dbPrice);
    })
    console.log(req);
  }); 
}