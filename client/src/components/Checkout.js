import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
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

// const steps = ['Pick Up Address', 'Select Your Vehicle', 'Payment Details', 'Review Your Order'];

// const getStepContent = (step) => {
//     switch (step) {
//         case 0:
//             return (
//                 <div>
//                     <AddressForm
//                         {...this.state}
//                     />
//                 </div>
//             )
//         case 1:
//             return (
//                 <div>
//                     <SelectCar />
//                 </div>
//             )
//         case 2:
//             return (
//                 <div>
//                     <PaymentForm />
//                 </div>
//             )
//         case 3:
//             return (
//                 <div>
//                     <Review />
//                 </div>
//             )
//         default:
//             throw new Error('Unknown step');
//     }
// }

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
                        <SelectCar />
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
                        <Review />
                    </div>
                )
            default:
                throw new Error('Unknown step');
        }
    }

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
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
                                        Your reservation number is #2001539. We have emailed your order confirmation, and will
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