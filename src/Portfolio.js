import React from "react";
import './portfoliostyles.css';
import * as $ from 'jquery';
import {TweenMax, Elastic} from "gsap";
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



class Portfolio extends React.Component {
    componentDidMount(){
        $('body').css({
                "background-color": "#323232",
                "font-family": 'Ubuntu',
                "color":"#61605"
        }
        );

        if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

            TweenMax.to($(".grid-container2"),1,{display:"inline-grid"});
            TweenMax.staggerFrom($(".grid-item"), 5, {scale:0.5, opacity:0, ease:Elastic.easeOut, display:"none", force3D:true}, 0.5);
        }


    }

    render(){
        return (
            <MuiThemeProvider theme={theme}>
                <div class="centered2">
                <div id="slider2">
                    <div className="slides2">
                        <div className="slider2">
                            <div className="legend"></div>
                            <div className="content">
                                <div className="content-txt">
                                    <h1>Andy Willner</h1>
                                    <h2>Magario assisted me with social media promotion for my yoga business. Thanks a lot. </h2>
                                </div>
                            </div>

                            <div className="images">
                                <a href="https://www.facebook.com/andrew.willner.54">
                                    <img src={require("./portfolio/andy_willner.jpg")} alt={"Andy Willner"}/></a>
                            </div>
                        </div>

                        <div className="slider2">
                            <div className="legend"></div>
                            <div className="content">
                                <div className="content-txt">
                                    <h1>Ludwig Donnert</h1>
                                    <h2>After moving to a new office without any form of network, Magario
                                        arrived within a day and set up the entire network. </h2>
                                    <h3>In addition to
                                        setting up the computers and printers on the network, they also fixed
                                        our website. Everything was done within 1 hour. A big thank you to
                                        Magario.</h3>
                                </div>
                            </div>
                            <div className="images">
                                <a href="https://www.alphasherpacapital.com/"><img src={require("./portfolio/ludwig_donnert.jpg")} alt={"Ludwig Donnert"}/></a>
                            </div>
                        </div>


                        <div className="slider2">
                            <div className="legend"></div>
                            <div className="content">
                                <div className="content-txt">
                                    <h1>Javed Rasool</h1>
                                    <h2>It has been a pleasure working with Magario over the past several years. </h2>
                                    <h3>During this time we have seen significant improvement in our organic rankings
                                        including a move from the 10th page to the 1st page position for our primary target “salsa classes hong kong”.</h3>
                                </div>
                            </div>
                            <div className="images">
                                <a href="http://dancewithstylehk.com"><img src={require("./portfolio/javed_rasool.jpg")} alt={"Javed Rasool"}/></a>
                            </div>
                        </div>

                        <div className="slider2">
                            <div className="legend"></div>
                            <div className="content">
                                <div className="content-txt">
                                    <h1>Hayashida Acupuntura</h1>
                                    <h2>A empresa Magario trabalha atuando em SEO/SEM e também na criação e manutenção do site da clínica. Muito obrigado.</h2>
                                </div>
                            </div>
                            <div className="images">
                                <a href="http://hayashida.com.br/"><img src={require("./portfolio/hayashida_acupuntura.jpg")} alt={"Hayashida"}/></a>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </MuiThemeProvider>
        );}
}


export default Portfolio;
