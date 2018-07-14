import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import registerServiceWorker from './registerServiceWorker';

const theme = createMuiTheme();

// prevents zooming in
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});
//
var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    showAddToHomeScreen();

});

function showAddToHomeScreen() {

    var a2hsBtn = document.querySelector(".ad2hs-prompt");

    a2hsBtn.style.display = "block";

    a2hsBtn.addEventListener("click", addToHomeScreen);

};

function addToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt");

    // hide our user interface that shows our A2HS button
    a2hsBtn.style.display = 'none';

    // Show the prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice
        .then(function(choiceResult){



            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt');
            } else {
                console.log('User dismissed the A2HS prompt');
            }

            deferredPrompt = null;

        });
};

render((
    <React.Fragment>
        <CssBaseline />
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </MuiThemeProvider>
    </React.Fragment>
),

    document.getElementById('root'));


registerServiceWorker();
