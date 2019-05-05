import React from "react";
import "./jumbotron.css";
import quickQuote from "../quickQuote";

function Jumbotron() {
  return (
    <div style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron">
      
      <quickQuote />
    </div>
  );
}

export default Jumbotron;
