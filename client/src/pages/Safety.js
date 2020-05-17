import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Footer from '../components/Footer';
import handle from '../pages/assets/images/car-handle.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        width: '66%',
        padding: '60px 30px 20px 30px',
        marginLeft: 'auto',
        marginRight: 'auto',
        [theme.breakpoints.down('md')]: {
            width: '90%',
        },
    },
    title: {
        paddingBottom: '35px',
    },
    image: {
        maxWidth: '100%',
        marginTop: theme.spacing(1),
        borderRadius: theme.spacing(0.5),
    }
}));

export default function Safety() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item sm={12}>
                        <Typography className={classes.title} component="h4" variant="h4" align="center" color="textPrimary">
                            What We're Doing to Ensure Your Safety and Ours?
                        </Typography>
                        <Typography variant="h6" align="left" color="textPrimary" component="p">
                            Our priority has always been the health and safety of our customers and our team.
                            We want our clients to feel safe and rest assured that during this pandemic, we are
                            taking every precaution and preventive measure to reduce their risk while traveling.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={8}>
                        <Typography align="left" variant="h6" color="textPrimary" component="p" gutterBottom>
                            {'We are dedicated to your safety by providing a clean and sterilized environment and following the '}
                            <Link href="https://www.cdc.gov/coronavirus/2019-ncov/community/organizations/rideshare-drivers-for-hire.html" title="CDC guidelines">CDC guidelines</Link>
                            {' for Limo companies.'}
                        </Typography>
                        <Typography align="left" variant="h6" color="textPrimary" component="p" gutterBottom>
                        To protect you, we clean and disinfect commonly touched surfaces in our cars after each ride paying special attention to surfaces that passengers frequently come in contact with. 
                        This includes door frames and handles, windows, seat belt buckles, and other interior vehicle parts.
                        </Typography>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <img
                            src={handle}
                            alt="handle"
                            className={classes.image}
                        />
                    </Grid>
                    <Grid item sm={12}>
                        <Typography variant="h6" align="left" color="textPrimary" component="p" paragraph>
                            {'CDC recommends wearing '}
                            <Link href="https://www.cdc.gov/coronavirus/2019-ncov/prevent-getting-sick/cloth-face-cover.html" title="CDC guidelines">cloth face coverings</Link>
                            {' in public settings where other social distancing measures are difficult to maintain. Cloth face coverings may prevent people who don’t know they have the virus from transmitting it to others.'}
                            {' If you were unable to acquire a mask, we would be glad to provide you with a disposable one (until supplies last).'}
                        </Typography>
                    </Grid>
                </Grid>
            </div>

            <Footer />

        </React.Fragment>
    );
}