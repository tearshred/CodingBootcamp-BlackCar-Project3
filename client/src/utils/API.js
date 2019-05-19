import axios from "axios";

export default {
  // Gets all prices
  getPrice: function() {
    return axios.get("/api/price");
  },
  // Gets the price with the given zip code and destination
  getPrice: function(zipCode, destination) {
    return axios.get("/api/price/" + zipCode + "/" + destination);
  },
  // Saves a reservation to the database
  bookReservation: function(dbReservation) {
    return axios.post("/api/reservation", dbReservation);
  }
};
