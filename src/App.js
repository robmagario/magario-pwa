import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';



import ImageHeader from './bg-header.jpg'; //
import Header from './Header';
import Main from './Main';


const theme = createMuiTheme();

class App extends Component {
    render() {
return(
    <MuiThemeProvider theme={theme}>

    <div className="content">
                        <Header />



                    </div>
    </MuiThemeProvider>

);


    }
}


export default App;


