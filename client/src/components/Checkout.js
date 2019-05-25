import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import SelectCar from './SelectCar';
import API from '../utils/API';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
});

class Checkout extends React.Component {
    state = {
        activeStep: 0,
        firstName: '',
        lastName: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        stateProvince: '',
        zipCode: '',
        country: '',
        destination: '',
        email: '',
        phoneNo: '',
        sedanPrice: '',
        suvPrice: '',
        rezType: '',
        fare: '',
        reservationNo: '',
        labelWidth: 0,
    };

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <AddressForm
                            {...this.state}
                            {...this.state.value}
                            handleChange={this.handleChange}
                        />
                    </div>
                )
            case 1:
                return (
                    <div>
                        <SelectCar 
                            {...this.state}
                            {...this.state.value}
                            carSelection={this.carSelection}
                        />
                    </div>
                )
            case 2:
                return (
                    <div>
                        <PaymentForm />
                    </div>
                )
            case 3:
                return (
                    <div>
                        <Review 
                            {...this.state}
                            {...this.state.value}
                        />
                    </div>
                )
            default:
                throw new Error('Unknown step');
        }
    }

    handleNext = () => {
        this.setState(prevState => ({
            activeStep: prevState.activeStep + 1,
        }));
        switch(this.state.activeStep){
            case 0: 
                // Creates an API call for sedan pricing
                API.getPrice(this.state.zipCode, "sedan" + this.state.destination).then(res => {
                    let price = res.data;

                    let key = Object.keys(price);
                    console.log(price[key]);
                    this.setState({sedanPrice: price[key]});
                })
                .catch(err => console.log(err));

                // Creates an API call for SUV pricing
                API.getPrice(this.state.zipCode, "suv" + this.state.destination).then(res => {
                    let price = res.data;

                    let key = Object.keys(price);
                    console.log(price[key])
                    this.setState({suvPrice: price[key]});
                })
                .catch(err => console.log(err));
            break
            case 1:
                console.log('nothing');
            break
            case 2:
                console.log('Getting the reservation numbers from the database');
                
                // Generates a random reservation number
                const min = Math.ceil(1000001);
                const max = Math.floor(9999999);
                const resGenerator =  Math.floor(Math.random() * (max - min + 1)) + min;
                this.setState({reservationNo: resGenerator});
                console.log(this.state.reservationNo);
                // console.log(reservationNo);
                console.log(resGenerator);

            break
            case 3:
                console.log('step 3 clicked')
                
                API.bookReservation({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    addressLine1: this.state.addressLine1,
                    addressLine2: this.state.addressLine2, 
                    city: this.state.city,
                    state: this.state.stateProvince,
                    zip: this.state.zipCode,
                    destination: this.state.destination,
                    price: this.state.fare,
                    email: this.state.email,
                    phoneNo: this.state.phoneNo,
                    reservationNo: this.state.reservationNo,
                }).catch(err => console.log(err));
            break
            default: 
                console.log('over');
        }
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    carSelection = event => {
        // Sets the state of the radio button to the one that is clicked and updates the state of the reservation
        this.setState({
            rezType: event.target.name,
        });
        this.setState({
            fare: event.target.value,
        });
    };
    
    handleChange = event => {
        console.log('this is working')
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        const { classes } = this.props;
        const { activeStep } = this.state;
        const steps = ['Pick Up Address', 'Select Your Vehicle', 'Payment Details', 'Review Your Order'];
        
        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h4" align="center">
                            Book your Ride
                        </Typography>
                        <Stepper activeStep={activeStep} className={classes.stepper}>
                            {steps.map(label => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your order.
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Your reservation number is #{this.state.reservationNo}. We have emailed your order confirmation, and will
                                        email you a reminder 24 hours ahead.
                                    </Typography>
                                </React.Fragment>
                                ) : (
                                <React.Fragment>
                                    {this.getStepContent(activeStep)}
                                    <div className={classes.buttons}>
                                        {activeStep !== 0 && (
                                            <Button onClick={this.handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                        )}
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={this.handleNext}
                                            className={classes.button}
                                        >
                                            {activeStep === steps.length - 1 ? 'Book Now' : 'Next'}
                                        </Button>
                                    </div>
                                </React.Fragment>
                                )}
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);