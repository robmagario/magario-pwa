import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Main from './Main';
import Footer from './Footer';
import 'typeface-roboto';
import {createMuiTheme} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    close: {
        width: theme.spacing.unit * 4,
        height: theme.spacing.unit * 4,
    },
});



//let deferredPrompt;
/*
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later on the button event.
    deferredPrompt = e;
// Update UI by showing a button to notify the user they can add to home screen
   // Snackbar.defaultProps.open = true;
    deferredPrompt.prompt();
});
*/

class App extends Component {
    state = {
        open: false,
    };

    componentDidMount() {
        // When the component is mounted, add your DOM listener to the "nv" elem.
        // (The "nv" elem is assigned in the render function.)
        //this.nv.addEventListener("nv-enter", this.handleNvEnter);
        window.addEventListener('beforeinstallprompt',this.handleBeforeInstallPrompt);
    }

    componentWillUnmount() {
        // Make sure to remove the DOM listener when the component is unmounted.
       // this.nv.removeEventListener("nv-enter", this.handleNvEnter);
        window.removeEventListener('beforeinstallprompt',this.handleBeforeInstallPrompt);
    }

    // Use a class arrow function (ES7) for the handler. In ES6 you could bind()
    // a handler in the constructor.
    handleBeforeInstallPrompt = (event) => {
        console.log("Before Install Prompt Enter:", event);
        this.setState({ open: true });

    }


        handleClick = () => {
            this.setState({ open: true });
        };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };


    render() {
        const { classes } = this.props;
       // this.handleClick;

        return (
            <body>
            <div>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Click on blue button on the bottom for installing the app.</span>}
                    action={[

                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
                <div className="menu centered2" >
                    <div>

                        <a href="/"><img alt='Magario Logo' src={require('./logo.png')} className="magario-logo"/></a>

                    </div>
                    <div>
                        <nav className="menu-navigation-round">
                            <a href="/" >Home</a>
                            <a href="/services">Services</a>
                            <a href="/contact">Contact</a>
                            <a href="/about">About</a>
                        </nav>
                    </div>

                </div>
                <Main/>
                <Footer/>

            </body>
        );
    }

}


    App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);

