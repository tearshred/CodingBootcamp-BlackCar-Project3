import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CityIcon from '@material-ui/icons/LocationCity';
import AirplaneIcon from '@material-ui/icons/AirplanemodeActive';
import ClockIcon from '@material-ui/icons/Schedule';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Banner from '../img/banner_main.png'

function MadeWithLove() {
  return (
    <Typography variant="subtitle1" color="textSecondary" align="center">
      {'Developed by '}
      <Link color="inherit" href="http://www.qbickle.com/">
        Qbickle Web Solutions
      </Link>
      {' team.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    strong: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(../img/banner_main.png)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: 550,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

const tiers = [
  {
    title: 'Charter Ride Booking',
    subheader: 'Point-to-Point Reservations',
    description: ['Going to a business meeting or simply visiting the area? Just tell us where to pick you up and drop you off, and our team of professional drivers will take care of the rest. You just sit back and enjoy the ride.'],
    buttonText: 'Book now',
    buttonVariant: 'contained',
  },
  {
    title: 'Airport Transportation',
    subheader: 'Meet-and-Greet Service',
    description: [
      'Whether you need to get to San Diego International Airport, Cruise ship terminal, LAX or CBX, you can count on us to get you there safely and on time.For other smaller airports in our service area, feel free to contact us and we will be more than happy to help you out.'
    ],
    buttonText: 'Book now',
    buttonVariant: 'contained',
  },
  {
    title: 'Hourly Charters',
    subheader: 'Hourly Cruise Around Town',
    description: [
      'Perfect for your date night. Embark on a luxurious journey at competitive prices. No need to rely on ride sharing or taxi services. Our fleet will take you to your destination and wait for you patiently. Book your personal chauffeur for the day.'
    ],
    buttonText: 'Book now',
    buttonVariant: 'contained',
  },
];

export default function Home() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear()
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Main featured post */}
        <Paper className={classes.mainFeaturedPost}>
          {/* Increase the priority of the hero background image */}
          {
            <img
              style={{ display: 'none' }}
              src={Banner}
              alt="background"
            />
          }
          <div className={classes.overlay} />
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                  Book Your Black Car Now
                  </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  We offer Ariport and Charter transportation all over San Diego county.
                  </Typography>
                <Link variant="h6" href="/booking">
                  Book now...
                  </Link>
              </div>
            </Grid>
          </Grid>
        </Paper>
        {/* End main featured post */}
      </main>

      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Services
        </Typography>
        <Typography variant="h4" align="center" color="textSecondary" component="p">
          Book your Black Car today
        </Typography>
      </Container>
      {/* End hero unit */}

      <Container maxWidth="md" component="main">
        <Grid container spacing={6} alignItems="center">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Charter Ride Booking' ? <CityIcon /> : null}
                  action={tier.title === 'Airport Transportation' ? <AirplaneIcon /> : null}
                  action={tier.title === 'Hourly Charters' ? <ClockIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            San Diego Airport Transportation
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            8880 Villa La Jolla Dr Unit 302, La Jolla, CA 92037
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            © {currentYear} Naissus LLC
          </Typography>
          <br />
          <MadeWithLove />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}