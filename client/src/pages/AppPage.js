import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ContactHero from '../components/ContactHero';
import Footer from '../components/Footer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import phone from '../pages/assets/images/person-holding-phone-cropped.jpg';
import AppleBadge from '../pages/assets/images/App_Store_Badge.svg';
import GoogleBadge from '../pages/assets/images/google-play-badge.png';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(12),
        marginBottom: 0,
        display: 'flex',
    },
    cardWrapper: {
        zIndex: 1,
    },
    card: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.grey[200],
        padding: theme.spacing(8, 3),
        borderRadius: theme.spacing(0.5),
    },
    cardContent: {
        maxWidth: 600,
    },
    imagesWrapper: {
        position: 'relative',
    },
    imageDots: {
        position: 'absolute',
        top: -67,
        left: -67,
        right: 0,
        bottom: 0,
        width: '100%',
    },
    image: {
        position: 'absolute',
        top: 20,
        left: -28,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: 500,
        borderRadius: theme.spacing(0.5),
    },
    links: {
        minHeight: 42,
    },
    storeBadge: {
        height: 40,
        margin: theme.spacing(1, 2),
        '&:hover': {
            height: 42,
            margin: theme.spacing(0.75, 1.6),
        },
    },
}));

export default function AppPage() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Container className={classes.root} component="section">
                <Grid container>
                    <Grid item xs={12} md={7} className={classes.cardWrapper}>
                        <Paper elevation={3} className={classes.card}>
                            <div className={classes.cardContent}>
                                <Typography align="center" variant="h4" component="h4" paragraph>
                                    Booking App
                                </Typography>
                                <Typography align="center" variant="h6">
                                    Download the app by using one of the links (iOS or Android).
                                </Typography>
                                <Box mt={1.5} mb={1} align="center" className={classes.links}>
                                    <a href='https://apps.apple.com/us/app/driven-anywhere/id1330142510'>
                                        <img
                                            src={AppleBadge}
                                            alt="Apple Store"
                                            className={classes.storeBadge}
                                        />
                                    </a>
                                    <a href='https://play.google.com/store/apps/details?id=com.limoanywhere.driven'>
                                        <img
                                            src={GoogleBadge}
                                            alt="Get it on Google Play"
                                            className={classes.storeBadge}
                                        />
                                    </a>
                                </Box>
                                <Typography align="center" variant="h6" gutterBottom>
                                    When promted enter the following code: B4C007
                                </Typography>
                                <Typography align="center" variant="h6" gutterBottom>
                                    LOGIN or REGISTER to start using the app.
                                </Typography>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={5} className={classes.imagesWrapper}>
                        <Hidden smDown>
                            <div className={classes.imageDots} />
                            <img
                                src={phone}
                                alt="app"
                                className={classes.image}
                            />
                        </Hidden>
                    </Grid>
                </Grid>
            </Container>

            <ContactHero />
            <Footer />

        </React.Fragment>
    );
}