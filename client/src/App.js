import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Faqs from './pages/Faqs';
import AppPage from './pages/AppPage';
import Navbar from './components/Navbar';
import Terms from './pages/TermsAndPolicies';
import Safety from './pages/Safety';
import NoMatch from './pages/NoMatch';
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/faqs' component={Faqs} />
        <Route path='/contact' component={Contact} />
        <Route path='/app' component={AppPage} />
        <Route path='/booking' component={Booking} />
        <Route path='/terms' component={Terms} />
        <Route path='/safety' component={Safety} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
  );
}

export default App;