import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    '@global': {
        strong: {
            fontWeight: theme.typography.fontWeightMedium,
        },
    },
    container: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function NoMatch() {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Typography variant="h4" align="center" color="textPrimary" component="p">
            404 Page Not Found
            </Typography>
        </Container>
    );
}