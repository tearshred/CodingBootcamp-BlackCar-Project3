import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Booking extends React.Component {

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
      <br/>
      <Typography align='center' variant="subtitle2" paragraph>
          <Link href="/safety" title="Safety">
            What We're Doing to Ensure Your Safety and Ours?
          </Link>
      </Typography>
      <br/>
      </React.Fragment>
    );
  }
}

export default Booking;