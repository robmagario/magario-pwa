import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import './teamstyles.css';
import * as $ from 'jquery';
import {TweenMax, Power2, Elastic} from "gsap";

import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        // type: 'dark', // Switching the dark mode on is a single property value change.
        primary: {
            light: 'accentGreen',
            main: 'primaryGreen',
            dark: 'darkGreen',
            contrastText: '#000000',

        },
        secondary: {
            light: 'accentPurple',
            main: 'primaryPurple',
            dark: 'darkPurple',
            contrastText: '#fff',

        },
    },
});


const styles = theme => ({
    root: {
        flexGrow: 1,
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

class Portfolio extends React.Component {
    componentDidMount(){
        $('body').css({
                "background-color": "#323232",
                "font-family": 'Ubuntu',
                "color":"#61605"
        }
        );
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            TweenMax.to($(".grid-container"),1,{display:"inline-grid"});

            $(".detailgriditem2").css("width","70vw");
            TweenMax.staggerFrom($(".grid-item"), 5, {scale:0.5, opacity:0, ease:Elastic.easeOut, force3D:true}, 0.5);

        }
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

            TweenMax.to($(".grid-container"),1,{display:"inline-grid"});
            TweenMax.staggerFrom($(".grid-item"), 5, {scale:0.5, opacity:0, ease:Elastic.easeOut, display:"none", force3D:true}, 0.5);
        }

    }

    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <div className="centered" style={{position:"absolute"}}>
                    <h1 id="titleText2" style={{display:"none"}}>PORTFOLIO</h1>
                </div>

                <div className="grid-container" style={{marginTop:"5vw",display:"none"}}>
                    <div className="grid-item">
                        <div><img src={require('./portfolio/1.jpg')} /></div>
                    </div>
                    <div className="grid-item">
                        <div><img src={require('./portfolio/2.jpg')} /></div>
                    </div>
                    <div className="grid-item">
                        <div><img src={require('./portfolio/3.jpg')} /></div>
                    </div>
                    <div className="grid-item">
                        <div><img src={require('./portfolio/4.jpg')} /></div>
                    </div>
                    <div className="grid-item">
                        <div><img src={require('./portfolio/5.jpg')} /></div>
                    </div>
                    <div className="grid-item">
                        <div><img src={require('./portfolio/6.jpg')} /></div>
                    </div>

                </div>

            </MuiThemeProvider>
        );}
}


export default Portfolio;
