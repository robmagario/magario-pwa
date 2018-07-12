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
import FastFood from '@material-ui/icons/FastForward';
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
    fab_buttons: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    list_style: 'none',
    margin: 0,
    padding: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 0.2,
},


});


function  Footer(props) {
    const { classes } = props;
    return (


            <MuiThemeProvider theme={theme}>
                <div className="fab">
  <span className="fab-action-button">
        <Info style={{width:'56',height:'56'}}/>
    </span>
                    <ul className="fab-buttons">
                        <li className="fab-buttons__item">
                            <a href="https://www.facebook.com/MagarioInternational/" className="fab-buttons__link" data-tooltip="Facebook">
                                <i className="icon-material icon-material_fb"></i>
                            </a>
                        </li>
                        <li className="fab-buttons__item">
                            <a href="#" className="fab-buttons__link" data-tooltip="Twitter">
                                <i className="icon-material icon-material_tw"></i>
                            </a>
                        </li>

                    </ul>
                </div>

            </MuiThemeProvider>

);

}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
