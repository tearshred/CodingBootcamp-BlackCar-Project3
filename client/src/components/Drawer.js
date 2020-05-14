import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Reorder';
import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MailIcon from '@material-ui/icons/Mail';
import CardIcon from '@material-ui/icons/CreditCard';
import DescriptionIcon from '@material-ui/icons/Description';
import AppIcon from '@material-ui/icons/PhonelinkSetup';

const useStyles = makeStyles({
    list: {
        width: 240,
    },
});

function ListItemLink(props) {
    return <ListItem style={{ padding: 0 }} button component="a" {...props} />;
}

function Drawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List style={{ paddingBottom: '4px', paddingTop: '8px' }}>
                <ListItemLink href="/">
                    <ListItem button>
                        <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                </ListItemLink>
            </List>
            <List style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                <ListItemLink href="/#services">
                    <ListItem button>
                        <ListItemIcon>{<BusinessIcon />}</ListItemIcon>
                        <ListItemText primary="Services" />
                    </ListItem>
                </ListItemLink>
            </List>
            <List style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                <ListItemLink href="/faqs">
                    <ListItem button>
                        <ListItemIcon>{<DescriptionIcon />}</ListItemIcon>
                        <ListItemText primary="FAQ" />
                    </ListItem>
                </ListItemLink>
            </List>
            <List style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                <ListItemLink href="/contact">
                    <ListItem button>
                        <ListItemIcon>{<MailIcon />}</ListItemIcon>
                        <ListItemText primary="Contact Us" />
                    </ListItem>
                </ListItemLink>
            </List>
            <List style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                <ListItemLink href="/app">
                    <ListItem button>
                        <ListItemIcon>{<AppIcon />}</ListItemIcon>
                        <ListItemText primary="Booking App" />
                    </ListItem>
                </ListItemLink>
            </List>
            <List style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                <ListItemLink href="/booking">
                    <ListItem button >
                        <ListItemIcon>{<CardIcon />}</ListItemIcon>
                        <ListItemText primary="Booking Form" />
                    </ListItem>
                </ListItemLink>
            </List>
            <Divider />
            <List style={{ paddingBottom: '4px', paddingTop: '4px' }}>
                <ListItemLink href="/terms">
                    <ListItem button>
                        <ListItemIcon>{<AssignmentIcon />}</ListItemIcon>
                        <ListItemText primary="Terms and Policies" />
                    </ListItem>
                </ListItemLink>
            </List>
        </div>
    );


    return (
        <div>
            <Button onClick={toggleDrawer('left', true)}><MenuIcon /></Button>

            <SwipeableDrawer
                open={state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
            >
                {sideList('left')}
            </SwipeableDrawer>
        </div>
    );
}

export default Drawer;