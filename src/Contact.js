import React, { Component } from "react";

import PropTypes from 'prop-types';
import './contactstyles.css';
import {TweenMax, Elastic} from "gsap";




class Contact extends Component {

    componentDidMount(){
            TweenMax.from(".form",2,{scale:0.5, opacity:0,delay:0.7, ease:Elastic.easeOut})
    }
    render() {
        return (
            <div class="centered5">
                <form className="form">
                    <h2 id={"hi"}>CONTACT US</h2>
                    <p id={"det"} type="Name:"><input placeholder="What's your name?"></input></p>
                    <p id={"det"} type="Email:"><input placeholder="How can we get back to you?"></input></p>
                    <p id={"det"} type="Message:"><input placeholder="How can we help?"></input></p>
                    <button id={"but"}>Send Message</button>
                    <div id={"box"}>
                        <span id="spanner"className="fa fa-phone"></span>+852 6818 3401
                        <span id="spanner" className="fa fa-envelope-o"></span> info@magario.com
                    </div>
                </form>
            </div>
    );
    }
}




export default Contact;
