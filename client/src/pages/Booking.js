import React, { Component } from 'react';
import Quote from '../components/Quote';

class Booking extends Component {

  componentWillMount () {
    const script = document.createElement("script");
 
    script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
    script.async = true;
 
    document.body.appendChild(script);
  }
  
  render() {
    return (
      //<Quote />

      <div>
        <a href={"https://book.mylimobiz.com/v4/naissus"} data-ores-widget={"website"} data-ores-alias={"naissus"}>Online Reservations</a>
      </div>
      
    );
  }
}

export default Booking;