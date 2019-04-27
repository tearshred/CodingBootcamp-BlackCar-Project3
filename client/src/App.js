import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Faqs from "./pages/Faqs";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/faqs" component={Faqs} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
