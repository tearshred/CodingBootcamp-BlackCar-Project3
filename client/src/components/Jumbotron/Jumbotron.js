import React from "react";
import "./jumbotron.css";
import QuickQuote from "../quickQuote";

const Jumbotron = () => {
  return (
    <div style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron">
      
      <QuickQuote />
    </div>
  );
}

export default Jumbotron;
