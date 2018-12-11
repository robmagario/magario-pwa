import React from "react";

import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import Portfolio from './Portfolio'
import Services from './Services'
import Team from './Team'
import NoMatch from './NoMatch'



const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/services' component ={Services}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/portfolio' component={Portfolio}/>
            <Route path='/team' component={Team}/>
            <Route component={NoMatch} />
        </Switch>
    </main>
)

export default Main;
