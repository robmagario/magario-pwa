import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact'
import CssBaseline from '@material-ui/core/CssBaseline';



const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
        </Switch>
    </main>
)

export default Main;
