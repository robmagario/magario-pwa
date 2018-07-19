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


class App extends Component {

    render() {
        return (
            <body>

                <div className="menu centered2" >
                    <div>

                        <a href="/"><img alt='Magario Logo' src={require('./logo.png')} className="magario-logo"/></a>

                    </div>
                    <div>
                        <nav className="menu-navigation-round">
                            <a href="/" className="selected">Home</a>
                            <a href="#">Services</a>
                            <a href="/contact">Contact</a>
                            <a href="/about">About</a>
                        </nav>
                    </div>

                    <div>

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

    export default App;

