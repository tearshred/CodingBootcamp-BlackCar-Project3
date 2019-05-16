import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    padding: '60px 30px 60px 30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  title: {
    paddingBottom: '60px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Faqs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} component="h2" variant="h2" align="center" color="textPrimary">
        Frequently Asked Questions
        </Typography>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is Black Car service?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Our fleet of exclusive black cars offer business travelers a luxury experience. Each sedan holds up to 4 passengers, plus luggage. Cars are clean, comfortable, and suitable for an exclusive experience.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>What is Black SUV service?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Our private SUV service is ideal for both leisure and corporate travel. Each SUV can hold up to 6 passengers plus luggage. Whether you are headed to a business meeting, special event or to the airport, Black SUV is a more spacious choice for your travel.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>When should I book my private ride?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            For the best experience, you are able to pre-plan your airport transportation and around town service. If you have a special event, business meeting or a plane to catch, you can schedule your ride either days or months in advance.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography className={classes.heading}>Can we provide service for a special event or date night?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            We specialize in event transportation designed with your needs in mind. Black cars can be booked for a night out on the town, special events and even wedding day service.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography className={classes.heading}>What does hourly service mean?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Hourly service is available for bookings of 2 hours or more. During your reserved block of time, you will be assigned a designated vehicle and a private chauffeur exclusively for you and your party.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography className={classes.heading}>What is Airport Meet and Greet Service?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Meet and Greet Service offers customers a more unique experience. When you pre-book your black car or SUV, you will have the option to select the “Meet and Greet Service.” Upon arrival to your destination, your private chauffeur will meet you inside of the airport in the baggage claim area holding a greeting sign with your name on it.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography className={classes.heading}>Will Call Service at the Airport?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Will Call Service is another exclusive choice for travelers. When you arrive to your destination, your private chauffeur will text you. Once you're ready for curbside pickup your chauffeur will meet you in the arrivals curbside pickup area. Be sure to provide your mobile phone number that you will be traveling with when you make your reservation.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>Payment Methods - How and when do I pay?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          We accept all major credit cards for your online pre-booking payment. To secure your black car or SUV, payments must be made in advance online or via a call center. Drivers will not accept credit card payment on the day of service. All charges are processed at the time of booking and can be refunded following the terms outlined in our cancellation policy.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>What will my ride cost?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          In order to obtain a fare quote, simply start your booking process by entering your pick up and drop off locations, number of passengers, desired vehicle type and time of day. By entering this information, you will provide our reservation system with the needed criteria to calculate a fare for your ride. At this time, you will receive upfront pricing for various service types prior to finalizing a reservation.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography className={classes.heading}>How many pieces of luggage can I have?</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          Our luggage policy closely follows that of airlines. For each passenger, two checked bags (e.g. suitcase, duffel bag) and two carry-on items (e.g. diaper bag, laptop case, backpack, or purse) all ride free. Extra fees may apply in the instances listed in our terms. Contact us for needs outside of those listed.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Faqs;