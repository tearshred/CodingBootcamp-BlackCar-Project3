import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Hidden from '@material-ui/core/Hidden';
import Drawer from './Drawer';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../pages/assets/images/LogoCropped.png';

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
  logo: {
    height: 46,
  },
  toolbarTitle: {
    flexGrow: 1,
    fontWeight: 600,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    fontWeight: 500,
    "&:active": {
      fontWeight: 600,
    }
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Drawer />
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography style={{marginLeft: '5px'}} variant="h4" color="inherit" className={classes.toolbarTitle}></Typography>
          <Hidden smDown>
          <nav>
            <Link variant="button" color="textPrimary" href="/" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="/#services" className={classes.link}>
              Services
            </Link>
            <Link variant="button" color="textPrimary" href="/faqs" className={classes.link}>
              Faq
            </Link>
            <Link variant="button" color="textPrimary" href="/contact" className={classes.link}>
              Contact
            </Link>
            <Link variant="button" color="textPrimary" href="/app" className={classes.link}>
              App
            </Link>
          </nav>
          </Hidden>
          <Hidden xsDown>
          <Button style={{marginRight: '0', marginLeft: '18px'}} href="/booking" color="primary" variant="outlined">
            Booking Form
          </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}