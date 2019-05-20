import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from '@material-ui/core/styles/withStyles';


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
});

class MyTrips extends React.Component {
    state = {
        reservationNo: "",
        email: "",
    };
    render() {
        const { classes } = this.props;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
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
                            onChange={this.handleInputChange}
                            name="confirmation"
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
                            onChange={this.handleInputChange}
                            autoComplete="email"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            disabled={!(this.state.reservationNo && this.state.email)}
                            onClick={this.handleFormSubmit}
                        >
                            Find Trip
          </Button>
          <Typography align='center' variant="body1">
                        Please Note: If you have a round trip reservation, you need to only enter one of the confirmation numbers to manage both legs of the trip.
                        </Typography>
        </form>
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
