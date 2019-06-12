import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
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
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
        paddingTop: 4,
        paddingBottom: 4,
    },
    TextField: {
        padding: 8,
    },
});

export class AddressForm extends React.Component {

    state = {
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        addressLine1: this.props.addressLine1,
        addressLine2: this.props.addressLine2,
        city: this.props.city,
        stateProvince: this.props.stateProvince,
        zipCode: this.props.zipCode,
        country: this.props.country,
        destination: this.props.destination,
    }

    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Your Information
                </Typography>
                <Grid container spacing={24}>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="First name"
                            fullWidth
                            autoComplete="fname"
                            value={this.props.firstName}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Last name"
                            fullWidth
                            autoComplete="lname"
                            value={this.props.lastName}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <Grid className={classes.TextField} item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="addressLine1"
                            label="Address line 1"
                            fullWidth
                            autoComplete="billing address-line1"
                            value={this.props.addressLine1}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <Grid className={classes.TextField} item xs={12}>
                        <TextField
                            id="address2"
                            name="addressLine2"
                            label="Address line 2"
                            fullWidth
                            autoComplete="billing address-line2"
                            value={this.props.addressLine2}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField
                            required
                            id="city"
                            name="city"
                            label="City"
                            fullWidth
                            autoComplete="billing address-level2"
                            value={this.props.city}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField 
                            id="stateProvince"
                            name="stateProvince"
                            label="State/Province/Region"
                            fullWidth
                            value={this.props.stateProvince}
                            onChange={this.props.handleChange}
                            />
                    </Grid>
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
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField
                            required
                            id="country"
                            name="country"
                            label="Country"
                            fullWidth
                            autoComplete="billing country"
                            value={this.props.country}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        {/* <FormControlLabel
                            control={<Checkbox color="primary" name="saveAddress" value="yes" />}
                            label="Same as billing address"
                        /> */}
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="E-mail"
                            fullWidth
                            autoComplete="email"
                            value={this.props.email}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <Grid className={classes.TextField} item xs={12} sm={6}>
                        <TextField
                            required
                            id="phoneNo"
                            name="phoneNo"
                            label="Phone Number"
                            fullWidth
                            autoComplete="phoneNo"
                            value={this.props.phoneNo}
                            onChange={this.props.handleChange}
                        />
                    </Grid>
                    <FormControl item xs={12} sm={6} className={classes.formControl}>
                        <InputLabel  shrink htmlFor="age-label-placeholder">
                            Destination
                        </InputLabel>
                        <Select
                            value={this.props.destination}
                            onChange={this.props.handleChange}
                            input={<Input name="destination" id="age-label-placeholder" />}
                            displayEmpty
                            name="destination"
                            className={classes.selectEmpty}
                        >
                            <MenuItem value="">
                                <em>Select Airport</em>
                            </MenuItem>
                            <MenuItem name="SAN" value={"SAN"}>San Diego International</MenuItem>
                            <MenuItem name="SDH" value={"SDH"}>San Diego Harbor</MenuItem>
                            <MenuItem name="LAX" value={"LAX"}>LAX</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </React.Fragment>
        );
    }
}

AddressForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);