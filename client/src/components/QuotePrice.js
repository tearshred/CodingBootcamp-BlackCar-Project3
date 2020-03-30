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
    TextField: {
        padding: 8,
    },
    card: {
        margin: 5,
    },
    media: {
        height: 120,
    },
    fare: {
        marginBottom: 0,
    },
});

class QuotePrice extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card} >
                                <CardMedia
                                    className={classes.media}
                                    image={sedan}
                                    title="Executive Sedan"
                                />
                                <CardContent className={classes.content} align="center">
                                    <Typography variant="h5" component="h2">
                                        Executive Sedan
                                    </Typography>
                                    <Typography component="p">
                                        <h2 className={classes.fare}>Base fare is ${this.props.sedanPrice}</h2>
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
                                <CardContent className={classes.content} align="center">
                                    <Typography variant="h5" component="h2">
                                        Executive SUV
                                    </Typography>
                                    <Typography component="p">
                                        <h2 className={classes.fare}>Base fare is ${this.props.suvPrice}</h2>
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