import React from "react";
import "./jumbotron.css";
import FrontpageQuote from "../FrontpageQuote";

const Jumbotron = () => {
  return (
    <div style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron">
      
      <FrontpageQuote />
    </div>
  );
}

export default Jumbotron;
