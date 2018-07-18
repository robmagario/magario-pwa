import React from "react";
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import './teamstyles.css';
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

class Home extends React.Component {
    componentDidMount(){

        $('#pg1but').click(function () {
            TweenMax.to($('body'),0.3,{backgroundColor:'#FEC200',ease:Power2.easeIn});
            TweenMax.to($('.menu2'),0,{display:'none',opacity:0});
            TweenMax.fromTo($('.menu1'),1,{rotation:'+=10'},{display:'inline-block',opacity:1,rotation:0});
            TweenMax.to($('.menu3'),0,{display:'none',opacity:0});
        });
        $('#pg2but').click(function () {
            TweenMax.to($('body'),0.3,{backgroundColor:'#e9a1b9',ease:Power2.easeIn});
            TweenMax.to($('.menu1'),0,{display:'none',opacity:0});
            TweenMax.fromTo($('.menu2'),1,{rotation:'+=10'},{display:'inline-block',opacity:1,rotation:0});
            TweenMax.to($('.menu3'),0,{display:'none',opacity:0});


        });
        $('#pg3but').click(function () {
            TweenMax.to($('body'),0.3,{backgroundColor:'#323232',ease:Power2.easeIn});
            TweenMax.to($('.menu1'),0,{display:'none',opacity:0});
            TweenMax.fromTo($('.menu3'),1.5,{rotation:'+=10'},{display:'inline-block',opacity:1,rotation:0});
            TweenMax.to($('.menu2'),0,{display:'none',opacity:0});
        });
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            TweenMax.to($(".grid-container"),1,{display:"inline-grid",delay:1});

            TweenMax.fromTo($('#titleText2'),1,{y:"+=200",opacity:0},{y:0,opacity:1});
            TweenMax.to($("#titleText2"),1,{fontSize:"-=20",y:"-=810",delay:1});
            $(".detailgriditem2").css("width","70vw");
            TweenMax.staggerFrom($(".grid-item"), 5, {scale:0.5, opacity:0, delay:1.8, ease:Elastic.easeOut, force3D:true}, 0.5);

        }
        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
            TweenMax.fromTo($('#titleText2'),1,{y:"+=200",opacity:0},{y:0,opacity:1,display:"block"});
            TweenMax.to($("#titleText2"),1,{fontSize:"-=70",y:"-=250",delay:1});

            TweenMax.to($(".grid-container"),1,{display:"inline-grid",delay:1});
            TweenMax.staggerFrom($(".grid-item"), 5, {scale:0.5, opacity:0, delay:1.8, ease:Elastic.easeOut, display:"none", force3D:true}, 0.5);
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


export default Home;
