import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 600
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
            Black Car
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="#services" className={classes.link}>
              Services
            </Link>
            <Link variant="button" color="textPrimary" href="#contact" className={classes.link}>
              Contact
            </Link>
            <Link variant="button" color="textPrimary" href="/booking" className={classes.link}>
              Booking Form
            </Link>
            <Link variant="button" color="textPrimary" href="/faqs" className={classes.link}>
              Faq
            </Link>
          </nav>
          <Button href="/signin" color="primary" variant="outlined" className={classes.link}>
            Sign in
          </Button>
          <Button href="signup" color="primary" variant="outlined" className={classes.link}>
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}