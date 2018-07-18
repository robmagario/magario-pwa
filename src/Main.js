import React from "react";

import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Portfolio from './Portfolio'
import Services from './Services'



const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/services' component ={Services}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/portfolio' component={Portfolio}/>
        </Switch>
    </main>
)

export default Main;
