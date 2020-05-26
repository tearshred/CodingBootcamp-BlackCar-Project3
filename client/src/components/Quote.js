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
            marginTop: theme.spacing(3.5),
            padding: theme.spacing(2),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
});

const zipCodeList = ['91901', '91902', '91905', '91906', '91910', '91911', '91913', '91914', '91915', '91916', '91917', '91932', '91934', 
                    '91935', '91941', '91942', '91945', '91950', '91962', '91963', '91977', '91978', '91980', '92003', '92004', '92007', 
                    '92008', '92009', '92010', '92011', '92014', '92019', '92020', '92021', '92024', '92025', '92026', '92027', '92028', 
                    '92029', '92036', '92037', '92040', '92054', '92055', '92056', '92057', '92058', '92059', '92061', '92064', '92065',
                    '92066', '92067', '92069', '92070', '92071', '92075', '92078', '92081', '92082', '92083', '92084', '92086', '92091', 
                    '92092', '92093', '92096', '92101', '92102', '92103', '92104', '92105', '92106', '92107', '92108', '92109', '92110', 
                    '92111', '92113', '92114', '92115', '92116', '92117', '92118', '92119', '92120', '92121', '92122', '92123', '92124', 
                    '92126', '92127', '92128', '92129', '92130', '92131', '92132', '92134', '92135', '92136', '92139', '92140', '92145', 
                    '92147', '92152', '92154', '92155', '92158', '92161', '92173', '92182', '92187', '92197', '92199', '92562', '92590', 
                    '92591', '92592', '92593', '92595', '92596'];

class Quote extends React.Component {
    state = {
        activeStep: 0,
        zipCode: '',
        destination: '',
        sedanPrice: '',
        suvPrice: '',
        labelWidth: 0,
        error: false,
        errorMessage: {}
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
        let isError = false;
        if (!zipCodeList.includes(this.state.zipCode)) {
            isError = true;
            this.setState({
                error: true,
                errorMessage: { zipCode: "Please enter correct zipcode" }
            });
        }
        if (this.state.destination === "") {
            isError = true;
            this.setState(prev => ({
                ...prev,
                error: true,
                errorMessage: {
                    ...prev.errorMessage,
                    destination: "Please select your destination"
                }
            }));
        }
        if (!isError) {
            this.setState(prevState => ({
                activeStep: prevState.activeStep + 1,
                error: false,
                errorMessage: {}
            }));
        }

        switch (this.state.activeStep) {
            case 0:
                // Creates an API call for sedan pricing
                API.getPrice(this.state.zipCode, "sedan" + this.state.destination).then(res => {
                    let price = res.data;
                    let key = Object.keys(price);
                    console.log("Sedan price is $" + price[key]);
                    this.setState({ sedanPrice: price[key] });
                })
                    .catch(err => console.log(err));

                // Creates an API call for SUV pricing
                API.getPrice(this.state.zipCode, "suv" + this.state.destination).then(res => {
                    let price = res.data;
                    let key = Object.keys(price);
                    console.log("SUV price is $" + price[key])
                    this.setState({ suvPrice: price[key] });
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