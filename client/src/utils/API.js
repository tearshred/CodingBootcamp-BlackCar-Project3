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
  },
  login: function(loginInfo) {
    // send user login info to API
    return axios.post("/api/auth/signin", loginInfo);
  },
  signup: function(signupInfo) {
    // send user signup info to API
    return axios.post("/api/auth/signup", signupInfo);
  }
};
