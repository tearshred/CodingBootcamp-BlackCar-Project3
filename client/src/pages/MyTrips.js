import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import API from '../utils/API';
import Checkout from '../components/Checkout';


const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    paper: {
        padding: theme.spacing(3, 2),
    },
    reservationLookup: {
        marginTop: theme.spacing(10),
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
    },
    reservationText: {
        paddingTop: 10
    },
});

class MyTrips extends React.Component {

    state = {
        activeStep: 0,
        customerReservationNo: '',
        email: '',
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        stateProvince: '',
        zipCode: '',
        destination: '',
        reservationNumber: '',
        showResults: true,
    };

    handleChange = event => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
        console.log('this is working')
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    getStepContent = (step) => {
        switch (step) {
            case 1:
                return (
                    <div>
                        <Checkout />
                    </div>
                )
            default:
                throw new Error('Unknown step');
        }
    }

    handleFormSubmit = event => {
        console.log('submitted')

        event.preventDefault();

        this.setState({ activeStep: 1 })

        this.setState({
            showResults: !this.state.showResults
        });

        API.checkReservationNo(this.state.email, this.state.customerReservationNo).then(res => {

            let response = res.data;

            // First Name Key Mapping
            let firstNmap = response.map((key) => key.firstName);
            let firstNkey = Object.keys(firstNmap);
            console.log(firstNmap[firstNkey]);

            // Set the state of First Name to the value of the Key obtained from the mapping
            this.setState({ firstName: firstNmap[firstNkey] });

            // Last Name Key Mapping
            let lastNmap = response.map((key) => key.lastName);
            let lastNkey = Object.keys(lastNmap);

            console.log(lastNmap[lastNkey]);

            this.setState({ lastName: lastNmap[lastNkey] });

            // Address Line 1 Key Mapping
            let addressLine1map = response.map((key) => key.addressLine1);
            let addrLine1key = Object.keys(addressLine1map);

            console.log(addressLine1map[addrLine1key]);

            this.setState({ addressLine1: addressLine1map[addrLine1key] })

            // Address Line 2 Key Mapping
            let addressLine2map = response.map((key) => key.addressLine2);
            let addrLine2key = Object.keys(addressLine2map);

            console.log(addressLine2map[addrLine2key]);

            this.setState({ addressLine2: addressLine2map[addrLine2key] });

            // City Key Mapping
            let cityMap = response.map((key) => key.city);
            let cityKey = Object.keys(cityMap);

            console.log(cityMap[cityKey]);

            this.setState({ city: cityMap[cityKey] });

            // Zip Code Key Mapping
            let zipMap = response.map((key) => key.zip);
            let zipKey = Object.keys(zipMap);

            console.log(zipMap[zipKey]);

            this.setState({ zipCode: zipMap[zipKey] });

            // State Code Key Mapping
            let stateMap = response.map((key) => key.state);
            let stateKey = Object.keys(stateMap);

            console.log(stateMap[stateKey]);

            this.setState({ stateProvince: stateMap[stateKey] });

            // Destination Key Mapping
            let destinationMap = response.map((key) => key.destination);
            let destinationKey = Object.keys(destinationMap);

            console.log(destinationMap[destinationKey]);

            this.setState({ destination: destinationMap[destinationKey] });

            // Reservation Number Key Mapping
            let reservationNoMap = response.map((key) => key.reservationNo);
            let reservationNoKey = Object.keys(reservationNoMap);

            console.log(reservationNoMap[reservationNoKey]);

            this.setState({ reservationNumber: reservationNoMap[reservationNoKey] });
        })
            .catch(err => console.log(err));

    }

    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div style={{ display: this.state.showResults ? "block" : "none" }} className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" gutterBottom>
                        Manage Your Trip
                    </Typography>
                    <Typography component="h1" align='center' variant="h6">
                        To manage an existing reservation we need your 7 digit confirmation number and the last name.
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="confirmation"
                            label="Confirmation Number"
                            value={this.state.reservationNo}
                            onChange={this.handleChange}
                            name="customerReservationNo"
                            autoComplete="number"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="email"
                            label="Email Address"
                            type="email"
                            id="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            autoComplete="email"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={!(this.state.customerReservationNo && this.state.email)}
                            onClick={this.handleFormSubmit}
                        >
                            Find Trip
                        </Button>
                        <Typography align='center' variant="body1">
                            Please Note: If you have a round trip reservation, you need to only enter one of the confirmation numbers to manage both legs of the trip.
                        </Typography>
                    </form>
                </div>
                
                <div style={{ display: this.state.showResults ? "none" : "block" }}>
                    <Paper className={classes.reservationLookup}>
                        <Typography variant="h4">
                            Reservation Details
                        </Typography>
                        <Typography className={classes.reservationText} variant="h5">
                            Reservation Number: #{this.state.customerReservationNo}
                        </Typography>
                        <Typography className={classes.reservationText}>
                            <b>First Name:</b> {this.state.firstName}
                        </Typography>
                        <Typography className={classes.reservationText}>
                            <b>Last Name:</b> {this.state.lastName}
                        </Typography>
                        <Typography className={classes.reservationText}>
                            <b>Address Line 1:</b> {this.state.addressLine1}
                        </Typography>
                        <Typography className={classes.reservationText}>
                            <b>Address Line 2:</b> {this.state.addressLine2}
                        </Typography>
                        <Typography className={classes.reservationText}>
                            <b>City:</b> {this.state.city}
                        </Typography>
                        <Typography className={classes.reservationText}>
                            <b>State:</b> {this.state.stateProvince}
                        </Typography>
                        <Typography className={classes.reservationText}>
                            <b>Zip Code:</b> {this.state.zipCode}
                        </Typography>
                    </Paper>
                </div>
                <Box mt={5}>
                    <Typography variant="body2" color="textSecondary" align="center">
                        {'Developed by Bojan & Veselin.'}
                    </Typography>
                </Box>
            </Container>
        )
    }
}

export default withStyles(styles)(MyTrips);
