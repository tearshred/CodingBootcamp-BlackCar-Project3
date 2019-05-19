import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const services = [
  { name: '', desc: '', price: '$85.00' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Review extends React.Component {

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Booking summary
      </Typography>
        <List disablePadding>
          {services.map(product => (
            <ListItem className={classes.listItem} key={product.name}>
              <ListItemText primary={product.name} secondary={product.desc} />
              One way {this.props.rezType} ride from zip {this.props.zipCode} to {this.props.destination} 
              <Typography variant="body2"> - ${this.props.fare}.00</Typography>
            </ListItem>
          ))}
          <ListItem className={classes.listItem}>
            <ListItemText primary="Total" />
            <Typography variant="subtitle1" className={classes.total}>
              ${this.props.fare}.00
          </Typography>
          </ListItem>
        </List>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Pick Up Address
          </Typography>
            <Typography gutterBottom>{this.props.firstName} {this.props.lastName}</Typography>
            <Typography gutterBottom>{this.props.addressLine1}, {this.props.addressLine2}
            </Typography>
            <Typography gutterBottom>{this.props.city}, {this.props.zipCode} 
            </Typography>
            <Typography gutterBottom>{this.props.stateProvince}</Typography>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Payment details
          </Typography>
            <Grid container>
              {payments.map(payment => (
                <React.Fragment key={payment.name}>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.name}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography gutterBottom>{payment.detail}</Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);