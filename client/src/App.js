import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Faqs from './pages/Faqs';
import Navbar from './components/Navbar';
import MyTrips from './pages/MyTrips';
import Terms from './pages/TermsAndPolicies';
import NoMatch from './pages/NoMatch';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/booking' component={Booking} />
        <Route exact path='/faqs' component={Faqs} />
        <Route exact path='/mytrips' component={MyTrips} />
        <Route exact path='/terms' component={Terms} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;