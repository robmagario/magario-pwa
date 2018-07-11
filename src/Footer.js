import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import blue from '@material-ui/core/colors/blue';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        //margin: theme.spacing.unit,
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    },


});


function  Footer(props) {
    const { classes } = props;
    return (


            <MuiThemeProvider theme={theme}>
                <Button variant="fab" color="secondary" aria-label="add" className={classes.button}>
                    <Info />
                </Button>

            </MuiThemeProvider>

);

}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
