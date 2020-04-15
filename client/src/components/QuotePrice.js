import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import sedan from '../pages/assets/images/Sedan.png';
import suv from '../pages/assets/images/SUV.png';

const styles = theme => ({
    card: {
        margin: 6,
        marginBottom: theme.spacing(1.6),
    },
    media: {
        height: 120,
    },
    fare: {
        marginBottom: theme.spacing(0.5),
        fontWeight: 600,
    },
    removeBottomPadding: {
        paddingBottom: theme.spacing(2),
        "&:last-child": {
          paddingBottom: theme.spacing(2)
        }
    }
});

class QuotePrice extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card} >
                                <CardMedia
                                    className={classes.media}
                                    image={sedan}
                                    title="Executive Sedan"
                                />
                                <CardContent className={classes.content} align="center" classes={{ root: classes.removeBottomPadding}}>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Executive Sedan
                                    </Typography>
                                    <Typography variant="h5" component="h2" className={classes.fare}>
                                        Base fare is ${this.props.sedanPrice}
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={suv}
                                    title="Executive SUV"
                                />
                                <CardContent className={classes.content} align="center" classes={{ root: classes.removeBottomPadding}}>
                                    <Typography variant="h5" component="h2" gutterBottom>
                                        Executive SUV
                                    </Typography>
                                    <Typography variant="h5" component="h2" className={classes.fare}>
                                        Base fare is ${this.props.suvPrice}
                                    </Typography>
                                </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </React.Fragment>
        );

    }
}


QuotePrice.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuotePrice);