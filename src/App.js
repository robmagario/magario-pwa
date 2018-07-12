import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from './Header';



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


