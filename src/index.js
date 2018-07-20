import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

// prevents zooming in
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
//








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
