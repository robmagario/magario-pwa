import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuList from '@material-ui/core/MenuList';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';
import Main from './Main';
import Footer from './Footer';
import 'typeface-roboto';
import {createMuiTheme} from "@material-ui/core/styles/index";

const theme = createMuiTheme({
    palette: {
        // type: 'dark', // Switching the dark mode on is a single property value change.
        primary: {
            light: 'accentGreen',
            main: 'primaryGreen',
            dark: 'darkGreen',
            contrastText: '#000000',
            background: '#f8c443',


        },
        secondary: {
            light: 'accentPurple',
            main: 'primaryPurple',
            dark: 'darkPurple',
            contrastText: '#fff',
            background: '#f8c443',

        },

    },
});


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#f8c443",

    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#f8c443",

    },
    typography: {
        fontFamily: 'Alegreya Sans SC',
        fontSize: '3rem',
        color: '#605F5F'
    },

});


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: "",

        }
    }


    render() {
        const { classes, theme } = this.props;
        return (
            <body style={theme}>
            <MuiThemeProvider theme={theme}>
                <div className="menu centered2">
                    <div>

                        <img alt='Magario Logo' src={require('./logo.png')} style={{width: '10vw'}}/>

                    </div>
                    <div>
                        <nav className="menu-navigation-round">
                            <a href="/" className="selected">Home</a>
                            <a href="#">Products</a>
                            <a href="#">Services</a>
                            <a href="/contact">Reach us</a>
                            <a href="/about">About</a>
                        </nav>
                    </div>
                </div>
                <Main/>
                <Footer/>
            </MuiThemeProvider>
            </body>
        );
    }

}


    App.propTypes = {
    classes: PropTypes.object.isRequired,
};

    export default withStyles(styles)(App);

