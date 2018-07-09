import React, { Component } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';





const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function About(props) {
    const { classes } = props;



    return (
        <div className={classes.root} style={{margin:50}}>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography style={{color:"black", "font-weight":"bold"}} variant="display2" gutterBottom>
                            CUSTOMIZED WEB SERVICE FOR ANYONE
                        </Typography>
                        <Typography variant="body1" gutterBottom align="center">
                            Magario International is a web consultancy firm based in Hong Kong.
                        </Typography>
                        <Typography style={{color:"black"}} variant="body1" gutterBottom align="center">
                            From personal blogs to corporate databases, we create sleek and beautiful websites and apps and send it to the world.
                        </Typography>
                        <div>

                            <p>International staff to meet the needs of an international clientele. Multilingual services, multi-currency websites.</p>
                            <p>We use the newest technologies to introduce your site to new audiences. From SEO technology to social media plugins and Adwords, we do it all.</p>
                            <p>We make web apps that transition from desktop to mobile devices. Rediscover your audience on a whole new platform.</p>
                            <p>We work on only a handful of projects at a time to ensure our clients receive our full attention. Project-specific websites within an efficient time frame.</p>
                        </div>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}


About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
