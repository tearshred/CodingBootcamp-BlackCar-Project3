import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import email from '../pages/assets/images/email-24px.svg';

const styles = theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(5),
    },
    button: {
        border: '4px solid currentColor',
        borderRadius: 0,
        height: 'auto',
        padding: theme.spacing(2, 5),
    },
    link: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    image: {
        height: 60,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
});

function ContactHero(props) {
    const { classes } = props;

    return (
        <Container className={classes.root} component="section">
            <Button className={classes.button} href="/contact">
                <Typography variant="h5" component="span">
                Got any questions?
        </Typography>
            </Button>
            <Typography variant="h5" align="center" className={classes.link}>
                Feel Free To Contact Us. We are here to help.
        </Typography>
            <img
                className={classes.image}
                src={email}
                alt="email"
            />
        </Container>
    );
}

ContactHero.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactHero);