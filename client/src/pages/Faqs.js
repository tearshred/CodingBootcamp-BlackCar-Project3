import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    width: '70%',
    padding: '60px 30px 20px 30px',
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
  },
  title: {
    paddingBottom: '40px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightRegular,
  },
  subheader: {
    paddingTop: '40px', 
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    borderTop: `2px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));

function Faqs() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography className={classes.title} component="h2" variant="h3" align="center" color="textPrimary">
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
              Meet and Greet Service offers customers a more unique experience. When you pre-book your black car or SUV, you will have the option to select the “Meet and Greet Service.” Upon arrival to your destination, your private chauffeur will meet you inside of the airport in the baggage claim area holding a greeting sign with your name on it. Additional fee of $10 will apply to your total fare.
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
            <Typography className={classes.heading}>How many pieces of luggage can I have?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              Our luggage policy closely follows that of airlines. For each passenger, two checked bags (e.g. suitcase, duffel bag) and two carry-on items (e.g. diaper bag, laptop case, backpack, or purse) all ride free. Extra fees may apply in the instances listed in our terms. Contact us for needs outside of those listed.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel9a-content"
            id="panel9a-header"
          >
            <Typography className={classes.heading}>Am I allowed to bring a pet?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>Our policy regarding the transport of animals is designed to ensure adequate space for the kennel(s), and your baggage. All animals – excluding service animals – must be kenneled to board the vehicle. Kennel guidelines are as follows:</p>
              <p>Less than 25 pounds: Lap carrier permitted</p>
              <p>More than 25 pounds: Must reserve SUV</p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel10a-content"
            id="panel10a-header"
          >
            <Typography className={classes.heading}>What is your Child Policy?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              We support the strongest safety standard by recommending that small children five years and under be secured in a child restraint seat for transportation. If federal, state, or local law requires your child be secured in a child safety seat, please bring one as it is the parent’s or caregiver’s responsibility. We do not provide child restraint seats and likely will not be able to provide service without one. Children under the age of 16 years old must be accompanied by an adult.
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel11a-content"
            id="panel11a-header"
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
            aria-controls="panel12a-content"
            id="panel12a-header"
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
            aria-controls="panel13a-content"
            id="panel13a-header"
          >
            <Typography className={classes.heading}>Changing Your Reservation?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>You can make a change to your reservation at any time by logging into your  account on our website, and going to the "My Trips" section.</p>
              <p>Please do not send an email to request a change in your reservation. Email requests are handled in the order they are received and may not be addressed in time to comply with our two-hour cancellation policy. For changes less than 24 hrs prior to scheduled pickup time please call or text 1 (619) 254-9269.</p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel13a-content"
            id="panel13a-header"
          >
            <Typography className={classes.heading}>Cancelling Your Reservation?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              <p>Customers can cancel a reservation at any time up to one (2) hours before the scheduled pickup for a full fare refund using the website. Cancellations can also be made by calling 1 (619) 254-9269.</p>
              <p>We will not provide a refund if the reservation is cancelled or changed less than 2 hours prior to pick-up time, or in the event of reservation abandonment. This includes bookings made within 2 hours of pickup time.</p>
              <p>Flight Cancellations and Delays Due to Airlines:</p>
              <p>Failure to contact us with flight cancellation or delay information in a timely manner may be considered reservation abandonment and may result in forfeiture of fare. Reservations impacted by airline delays and cancellations may qualify for refund when a replacement reservation is made.</p>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <div className={classes.subheader}>
        <Typography align='center' variant="h6">
          {'For more details please check our '}
          <Link href="/terms" title="Terms and Policies">
            Terms and Policies
              </Link>
          {' page.'}
        </Typography>
        </div>
      </div>

      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h5" align="center" gutterBottom>
            San Diego Airport Transportation
       </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Phone: (619) 254-9269  |  Location: La Jolla, CA 92037
       </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            © {currentYear} Naissus LLC
       </Typography>
        </Container>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Developed by Bojan & Veselin.'}
          </Typography>
        </Box>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Faqs;