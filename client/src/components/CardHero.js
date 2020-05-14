import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import image01 from '../pages/assets/images/driver-openning-door.jpg';
import image02 from '../pages/assets/images/aircraft-suburban-cropped.jpg';
import image03 from '../pages/assets/images/person-holding-phone-edited.jpg';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  cardGrid: {
    alignItems: 'center',
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardContent: {
    paddingLeft: theme.spacing(2.5),
    "&:last-child": {
      paddingBottom: theme.spacing(2)
    }
  },
  cardMedia: {
    height: 220,
  },
}));

export default function CardHero() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container maxWidth="lg">
          <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
            Why Book With Us?
            </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Commitment to quality transportation service meeting the individual needs of every customer
            </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image={image01} />
                </Hidden>
                <CardActionArea component="a" href="/">
                  <CardContent className={classes.cardContent}>
                    <Typography component="h2" variant="h5" gutterBottom>
                      Safety
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      Your safety comes first.
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      Our professional chauffeurs are fully licensed, insured, and background checked.
                      Our clean and safe vehicles go thru daily vehicle preparation and preventive maintenance.
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" paragraph>
                      Learn more about what we are doing in response to the COVID-19 pandemic.
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Learn more...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image={image02} />
                </Hidden>
                <CardActionArea component="a" href="/booking">
                  <CardContent className={classes.cardContent}>
                    <Typography component="h2" variant="h5" gutterBottom>
                      On Time
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      We're on time when you need it.
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      Enjoy a stress free ride to the airport or a business meeting.
                      Our attention to detail gives you confidence that your transportation needs will be handled in a timely and proffesional matter.
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" paragraph>
                      On time, Every time!
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      BOOK NOW
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <Hidden xsDown>
                  <CardMedia className={classes.cardMedia} image={image03} />
                </Hidden>
                <CardActionArea component="a" href="/">
                  <CardContent className={classes.cardContent}>
                    <Typography component="h2" variant="h5" gutterBottom>
                      Flexible Booking
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      Yes, We have an App!
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      Rides can now be booked through our app available on iOS and Android devices.
                      Get detailed information about your driver and track the exact location of your car in real-time.
                      </Typography>
                    <Typography variant="subtitle1" color="textSecondary" paragraph>
                      Your upfront all-inclusive rate will include all taxes, fees, and gratuities. No hidden fees.
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                      Learn more...
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment >
  );
}