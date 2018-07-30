import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

// prevents zooming in
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
//
ReactGA.initialize('UA-33865619-1');

export function fireTracking(nextState) {

    const { pathname } = nextState.location // this gives you the next URL

    ReactGA.pageview(pathname)

}

render((

    <React.Fragment>

    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </MuiThemeProvider>

    </React.Fragment>

),

    document.getElementById('root'));


registerServiceWorker();
