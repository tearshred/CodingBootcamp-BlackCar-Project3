import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import footerlogo from '../pages/assets/images/LogoCropped.png';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        borderTop: `2px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(4),
        padding: theme.spacing(6, 0),
        marginBottom: theme.spacing(2),
    },
    footerlogo: {
        maxWidth: 330,
    },
    link: {
        marginRight: theme.spacing(1),
    }
}));

export default function Footer() {
    const classes = useStyles();
    const currentYear = new Date().getFullYear();

    return (
        <React.Fragment>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h5" align="center" gutterBottom>
                        San Diego Executive Transportation
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Phone: (619) 254-9269  |  Location: La Jolla, CA 92037
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        <Link className={classes.link} href="/terms" title="Terms">Terms</Link>
                        <Link className={classes.link} href="/terms#privacy" title="Privacy">Privacy</Link>© {currentYear} Naissus LLC
                    </Typography>
                    <Box mt={2} align="center">
                        <img src={footerlogo} alt="logo" className={classes.footerlogo} />
                    </Box>
                </Container>
            </footer>
        </React.Fragment >
    );
}