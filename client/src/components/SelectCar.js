import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
        height: 140,
    },
});

class SelectCar extends React.Component {

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={sedan}
                                    title="Executive Sedan"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Executive Sedan
                                    </Typography>
                                    <Typography component="p">
                                        Book an executive Sedan to the airport.
                                        <h2> $ </h2>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={suv}
                                    title="Executive SUV"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Executive SUV
                                    </Typography>
                                    <Typography component="p">
                                        Book an executive SUV to the airport.
                                        <h2> $ </h2>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </React.Fragment>
        );

    }
}


SelectCar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectCar);