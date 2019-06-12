import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ContactHero from '../components/ContactHero';
import banner from './assets/images/banner_main.png';
import city from './assets/images/city-24px.svg';
import airplane from './assets/images/airplane-24px.svg';
import clock from './assets/images/clock-24px.svg';


const useStyles = makeStyles(theme => ({
  '@global': {
    strong: {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[500],
    color: theme.palette.common.white,
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
    textAlign: 'center',
    justifyContent: 'auto',
    padding: theme.spacing(3),
    marginTop: '-180px',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '-80px',
    },
  },
  buttonHero: {
    marginTop: theme.spacing(3),
    minWidth: 220,
    borderRadius: 0,
      '&:hover': {
        borderRadius: 4,
      }, 
  },
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.palette.grey[200],
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  container: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(8),
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  items: {
    marginTop: theme.spacing(6),
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
  },
  image: {
    height: 55,
  },
  title: {
    textAlign: "center",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
  button: {
    marginTop: theme.spacing(8),
    minWidth: 240,
    borderRadius: 0,
      '&:hover': {
        borderRadius: 4,
      }, 
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    borderTop: `2px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(4),
    padding: theme.spacing(6, 0),
  },
}));


export default function Home() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Main featured post */}
        <Paper className={classes.mainFeaturedPost}>
           <img
            style={{ width: '100%' }}
            src={banner}
            alt="background"
          /> 
          <div className={classes.overlay} />
          <Grid>
            <Grid item md={12}>
              <div className={classes.mainFeaturedPostContent}>
                <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                  Book Your Black Car Now
                  </Typography>
                <Typography variant="h5" color="inherit" paragraph>
                  We offer Ariport and Charter transportation all over San Diego county.
                  </Typography>
                <Button
                  color="primary"
                  size="large"
                  variant="contained"
                  className={classes.buttonHero}
                  component="a"
                  href="/booking"
                >
                  BOOK NOW
                </Button>
              </div>
            </Grid>
          </Grid>
        </Paper>
        {/* End main featured post */}
      </main>

      {/* Services */}
      <section id="services" className={classes.root}>
        <Container className={classes.container}>
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            Services
        </Typography>
          <Typography variant="h5" align="center" color="textPrimary" component="p">
            Book Your Black Car Today
        </Typography>
          <div className={classes.items}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    className={classes.image}
                    src={city}
                    alt="city"
                  />
                  <Typography variant="h4" className={classes.title}>
                    Charter Ride Booking
                  </Typography>
                  <Typography variant="h6" align="center">
                    {'Going to a business meeting or simply visiting the area? Just tell us where to pick you up and drop you off, and our team of professional drivers will take care of the rest. You just sit back and enjoy the ride.'}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    className={classes.image}
                    src={airplane}
                    alt="airplane"
                  />
                  <Typography variant="h4" className={classes.title}>
                    Airport Transportation
                  </Typography>
                  <Typography variant="h6" align="center">
                    {'Whether you need to get to San Diego International Airport, Cruise ship terminal, LAX or CBX, you can count on us to get you there safely and on time. For other smaller airports in our service area, feel free to contact us and we will be more than happy to help you out.'}
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={12} md={4}>
                <div className={classes.item}>
                  <img
                    className={classes.image}
                    src={clock}
                    alt="clock"
                  />
                  <Typography variant="h4" className={classes.title}>
                    Hourly Charter
                </Typography>
                  <Typography variant="h6" align="center">
                    {'Perfect for your date night. Embark on a luxurious journey at competitive prices. No need to rely on ride sharing or taxi services. Our fleet will take you to your destination and wait for you patiently. Book your personal chauffeur for the day around town.'}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
          <Button
            color="primary"
            size="large"
            variant="contained"
            className={classes.button}
            component="a"
            href="/booking"
          >
            BOOK NOW
          </Button>
        </Container>
      </section>
      {/* End of Services */}
      
      <ContactHero />

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