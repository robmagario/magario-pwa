import React, { Component } from "react";
import './contactstyles.css';
import {TweenMax, Elastic} from "gsap";

class Contact extends Component {

    componentDidMount(){
            TweenMax.from(".form",2,{scale:0.5, opacity:0,delay:0.7, ease:Elastic.easeOut})
    }
    render() {
        function sendmail(){

        }
        return (
            <div class="centered5">
                <form className="form">
                    <h2 id={"hi"}>CONTACT US</h2>
                    <img src={require("./map.png")} alt={"Map"}/>
                    <h3>2F, Kerry Hotel 紅磡湾, 38 Hung Luen Rd, Hung Hom</h3>
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
