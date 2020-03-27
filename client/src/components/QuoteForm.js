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

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        maxWidth: 260,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 1.625,
        paddingTop: 4,
    },
    TextField: {
        padding: 8,
        maxWidth: 276,
    },
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
                <Typography variant="h5" align="center" gutterBottom>
                    Enter your zip code for a quick quote
                </Typography>
                <Grid container spacing={24}>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField
                            required
                            id="zip"
                            name="zipCode"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="billing postal-code"
                            value={this.props.zipCode}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <FormControl item xs={12} sm={6} className={classes.formControl}>
                        <Select
                            required
                            value={this.props.destination}
                            onChange={this.props.handleChange}
                            input={<Input name="destination" />}
                            displayEmpty
                            name="destination"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>Select Airport</em>
                            </MenuItem>
                            <MenuItem name="SAN" value={"SAN"}>San Diego International Airport</MenuItem>
                            <MenuItem name="LAX" value={"LAX"}>Los Angeles International Airport</MenuItem>
                        </Select>
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