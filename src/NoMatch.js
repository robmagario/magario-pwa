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
                    <h2 id={"hi"}>No Match! 404 error.</h2>
                    <h3>The page you requested was not found!</h3>

                </form>
            </div>
    );
    }
}




export default Contact;
