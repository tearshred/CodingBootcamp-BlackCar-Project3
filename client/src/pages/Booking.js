import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Booking extends Component {

  componentWillMount () {
    const script = document.createElement("script");
 
    script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
    script.async = true;
 
    document.body.appendChild(script);
  }
  
  render() {
    return (
      <React.Fragment>
      <div>
        <a href={"https://book.mylimobiz.com/v4/naissus"} data-ores-widget={"website"} data-ores-alias={"naissus"}>Online Reservations</a>
      </div>
      <Typography align='center' variant="subtitle1" paragraph>
          <Link href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/diy-cloth-face-coverings.html" title="CDC recommendation">
            CDC recommends riders to wear a cloth face covering when using vehicle-for-hire transportation services
          </Link>
      </Typography>
      </React.Fragment>
    );
  }
}

export default Booking;