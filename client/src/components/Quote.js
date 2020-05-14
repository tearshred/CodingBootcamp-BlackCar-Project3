import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import QuoteForm from './QuoteForm';
import API from '../utils/API';
import QuotePrice from './QuotePrice';

const styles = theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: theme.palette.grey[200],
        borderRadius: theme.spacing(0.5),
        [theme.breakpoints.up(600 + theme.spacing(2))]: {
            width: 584,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: theme.palette.grey[200],
        [theme.breakpoints.up(600 + theme.spacing(3))]: {
            marginTop: theme.spacing(3),
            padding: theme.spacing(2),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(0.5),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
});

class Quote extends React.Component {
    state = {
        activeStep: 0,
        zipCode: '',
        destination: '',
        sedanPrice: '',
        suvPrice: '',
        labelWidth: 0,
    };

    getStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <div>
                        <QuoteForm
                            {...this.state}
                            {...this.state.value}
                            handleChange={this.handleChange}
                        />
                    </div>
                )
            case 1:
                return (
                    <div>
                        <QuotePrice 
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
                    console.log("Sedan price is $" + price[key]);
                    this.setState({sedanPrice: price[key]});
                })
                .catch(err => console.log(err));

                // Creates an API call for SUV pricing
                API.getPrice(this.state.zipCode, "suv" + this.state.destination).then(res => {
                    let price = res.data;
                    let key = Object.keys(price);
                    console.log("SUV price is $" + price[key])
                    this.setState({suvPrice: price[key]});
                })
                .catch(err => console.log(err));
            break
            case 1:
                console.log('forward to booking page');
                window.location.href = '/booking';
            break
            default: 
                console.log('over');
        }
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
            sedanPrice: '',
            suvPrice: '',
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
        const steps = ['Pick Up Address', 'Select Your Vehicle'];

        return (
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <React.Fragment>
                            {activeStep === steps.length ? (
                                <React.Fragment>
                                    <Typography variant="h5" gutterBottom>
                                        Thank you for your interest!
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

Quote.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Quote);