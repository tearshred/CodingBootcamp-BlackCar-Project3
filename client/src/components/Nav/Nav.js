import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2 col-md-12">
        <Link className="navbar-brand" to="/">
          Black Car
        </Link>
        <button
          onClick={this.toggleNav}
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${this.state.open ? "" : "collapse "}navbar-collapse `} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "#services" ? "nav-link active" : "nav-link"}
                to="#services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "#contact" ? "nav-link active" : "nav-link"}
                to="#contact"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/booking" ? "nav-link active" : "nav-link"}
                to="/booking"
              >
                Booking Form
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/faqs" ? "nav-link active" : "nav-link"}
                to="/faqs"
              >
                FAQS
              </Link>
            </li>
            <li className="nav-item login">
              <Link
                onClick={this.toggleNav}
                className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav> 
    );
  }
}

export default Nav;
