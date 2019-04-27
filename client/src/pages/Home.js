import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: ""
};

render() {
    return (
      <Jumbotron>
        Hello!
      </Jumbotron>
    );
  }
}

export default Home;