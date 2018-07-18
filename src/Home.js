import React from "react";
import * as $ from 'jquery';
import {TweenMax, Power2, Elastic} from "gsap";
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
                <div className="centered" align="center" style={{display: "inline-block"}}>
                    <div className="menu1">
                        <h1 id="titleText">WEBSITES</h1>
                        <h2 id="subtext">WEB DESIGN AND E-MARKETING SPECIALISTS</h2>
                    </div>
                    <div className="menu2" style={{display: "none", opacity:0}}>
                        <h1 id="titleText">SERVERS</h1>
                        <h2 id="subtext">FIX EXISTING AND POTENTIAL SERVER ISSUES AND PROVIDE NGINX SERVERS </h2>
                    </div>
                    <div className="menu3" style={{display: "none", opacity:0}}>
                        <h1 id="titleText">MOBILE</h1>
                        <h2 id="subtext">WE DEVELOP NATIVE MOBILE APPS AND PROGRESSIVE WEB APPS</h2>
                    </div>
                </div>
                <div className="centered" style={{marginLeft:"0"}}>
                    <ul>
                        <li id="pg1but">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                 clip-rule="evenodd">
                                <path
                                    d="M14.25 23l-1.188.782c-.154.139-.38.218-.615.218h-.894c-.235 0-.461-.079-.616-.218l-1.187-.782h4.5zm.042-2c.276 0 .5.224.5.5 0 .277-.224.5-.5.5h-4.558c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5h4.558zm.494-1h-5.572c0-3.949-3.214-5.659-3.214-9.228 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.052 6.003 5.772 0 3.569-3.214 5.224-3.214 9.228m4.953-7.229l2.699 1.224-.827 1.822-2.596-1.177c.301-.6.55-1.215.724-1.869m-15.477 0c.173.664.415 1.261.719 1.87l-2.592 1.176-.827-1.822 2.7-1.224zm15.55-3.771h3.188v2h-3.003c.021-.67-.04-1.345-.185-2m-15.625 0c-.143.654-.203 1.326-.184 1.995v.005h-3.003v-2h3.187zm13.856-3.428l2.485-1.763 1.158 1.631-2.505 1.777c-.292-.582-.67-1.132-1.138-1.645m-12.087-.001c-.46.503-.837 1.05-1.138 1.645l-2.503-1.776 1.157-1.631 2.484 1.762zm8.869-2.092l1.327-2.69 1.793.885-1.327 2.69c-.557-.367-1.161-.664-1.793-.885m-5.651-.002c-.631.22-1.236.516-1.794.884l-1.326-2.687 1.794-.885 1.326 2.688zm3.826-.416c-.668-.078-1.309-.082-2-.003v-3.058h2v3.061z"/>
                            </svg>
                        </li>
                        <li id="pg2but">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                 clip-rule="evenodd">
                                <path
                                    d="M14.25 23l-1.188.782c-.154.139-.38.218-.615.218h-.894c-.235 0-.461-.079-.616-.218l-1.187-.782h4.5zm.042-2c.276 0 .5.224.5.5 0 .277-.224.5-.5.5h-4.558c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5h4.558zm.494-1h-5.572c0-3.949-3.214-5.659-3.214-9.228 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.052 6.003 5.772 0 3.569-3.214 5.224-3.214 9.228m4.953-7.229l2.699 1.224-.827 1.822-2.596-1.177c.301-.6.55-1.215.724-1.869m-15.477 0c.173.664.415 1.261.719 1.87l-2.592 1.176-.827-1.822 2.7-1.224zm15.55-3.771h3.188v2h-3.003c.021-.67-.04-1.345-.185-2m-15.625 0c-.143.654-.203 1.326-.184 1.995v.005h-3.003v-2h3.187zm13.856-3.428l2.485-1.763 1.158 1.631-2.505 1.777c-.292-.582-.67-1.132-1.138-1.645m-12.087-.001c-.46.503-.837 1.05-1.138 1.645l-2.503-1.776 1.157-1.631 2.484 1.762zm8.869-2.092l1.327-2.69 1.793.885-1.327 2.69c-.557-.367-1.161-.664-1.793-.885m-5.651-.002c-.631.22-1.236.516-1.794.884l-1.326-2.687 1.794-.885 1.326 2.688zm3.826-.416c-.668-.078-1.309-.082-2-.003v-3.058h2v3.061z"/>
                            </svg>
                        </li>
                        <li id="pg3but">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"
                                 clip-rule="evenodd">
                                <path
                                    d="M14.25 23l-1.188.782c-.154.139-.38.218-.615.218h-.894c-.235 0-.461-.079-.616-.218l-1.187-.782h4.5zm.042-2c.276 0 .5.224.5.5 0 .277-.224.5-.5.5h-4.558c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5h4.558zm.494-1h-5.572c0-3.949-3.214-5.659-3.214-9.228 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.052 6.003 5.772 0 3.569-3.214 5.224-3.214 9.228m4.953-7.229l2.699 1.224-.827 1.822-2.596-1.177c.301-.6.55-1.215.724-1.869m-15.477 0c.173.664.415 1.261.719 1.87l-2.592 1.176-.827-1.822 2.7-1.224zm15.55-3.771h3.188v2h-3.003c.021-.67-.04-1.345-.185-2m-15.625 0c-.143.654-.203 1.326-.184 1.995v.005h-3.003v-2h3.187zm13.856-3.428l2.485-1.763 1.158 1.631-2.505 1.777c-.292-.582-.67-1.132-1.138-1.645m-12.087-.001c-.46.503-.837 1.05-1.138 1.645l-2.503-1.776 1.157-1.631 2.484 1.762zm8.869-2.092l1.327-2.69 1.793.885-1.327 2.69c-.557-.367-1.161-.664-1.793-.885m-5.651-.002c-.631.22-1.236.516-1.794.884l-1.326-2.687 1.794-.885 1.326 2.688zm3.826-.416c-.668-.078-1.309-.082-2-.003v-3.058h2v3.061z"/>
                            </svg>
                        </li>
                    </ul>
                </div>

            </MuiThemeProvider>
        );}
}


export default Home;
