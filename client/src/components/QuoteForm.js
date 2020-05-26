import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing(0.5),
        width: 268,
        textAlign: 'left',
    },
    selectEmpty: {
        marginTop: theme.spacing(1.6),
        paddingTop: 4,
    },
    TextField: {
        padding: 4,
        maxWidth: 276,
    },
    title: {
        marginTop: theme.spacing(0.5)
    }
});

export class QuoteForm extends React.Component {

    state = {
        zipCode: this.props.zipCode,
        destination: this.props.destination,
    }

    render() {
        
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h5" align="center" className={classes.title}>
                    Enter your zip code for a quick quote
                </Typography>
                <Grid container>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zipCode"
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            label="ZIP / Postal code"
                            fullWidth
                            autoComplete="billing postal-code"
                            value={this.props.zipCode}
                            onChange={this.props.handleChange}
                            error={this.props.error}
                            helperText={
                                this.props.errorMessage.zipCode &&
                                this.props.errorMessage.zipCode
                            }
                        />
                    </Grid>
                    <FormControl xs={12} sm={6} className={classes.formControl} error={this.props.error}>
                        <Select
                            error={this.props.error}
                            label="enter cor dest"
                            required
                            value={this.props.destination}
                            onChange={this.props.handleChange}
                            input={<Input name="destination" />}
                            displayEmpty
                            name="destination"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>Select Your Airport *</em>
                            </MenuItem>
                            <MenuItem name="SAN" value={"SAN"}>San Diego International Airport</MenuItem>
                            <MenuItem name="LAX" value={"LAX"}>Los Angeles International Airport</MenuItem>
                        </Select>
                        <FormHelperText>
                            {this.props.errorMessage.destination}
                        </FormHelperText>
                    </FormControl>
                </Grid>
            </React.Fragment>
        );
    }
}

QuoteForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(QuoteForm);