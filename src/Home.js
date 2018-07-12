import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
       // type: 'dark', // Switching the dark mode on is a single property value change.
        primary: {
            light: 'accentGreen',
            main: 'primaryGreen',
            dark: 'darkGreen',
            contrastText: '#000000',

        },
        secondary: {
            light: 'accentPurple',
            main: 'primaryPurple',
            dark: 'darkPurple',
            contrastText: '#fff',

        },
    },
});


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: "#f8c443",

    },
    typography: {
        fontFamily: 'Alegreya Sans SC',
        fontSize: '3rem',
        color: '#605F5F'
    },

});

function Home(props) {
    const { classes } = props;

    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root} style={{margin:70, backgroundColor:"#f8c443", textAlign:"center"}}>
            <Grid container spacing={24} >
                <Grid item xs={12} >

                    <img src={require('./logo.png')} />

                    <Typography className={classes.typography} variant="display3" gutterBottom >
                        WE CODE THE FUTURE TODAY
                    </Typography>

                </Grid>

            </Grid>
        </div>
        </MuiThemeProvider>
    );
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
