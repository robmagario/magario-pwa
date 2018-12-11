import React from "react";

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as $ from 'jquery';
import {TweenMax, Power3} from "gsap";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import international from './international.jpg';
import servers from './servers.png';
import mobile from './mobile.jpg';
import special_attention from './special_attention.jpg'
import robson_hayashida from './robson_hayashida.jpg'
import todd_katsuyama from './todd_katsuyama.jpg'
import andrew_luk from './andrew_luk.jpg'
import hemant_sureshkumar from './hemant_sureshkumar.png'
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});





class Team extends React.Component {


    componentDidMount(){
        $('body').css({
            "background-color": "#02c9c9",
            "font-family": 'Ubuntu',
            "color":"#61605"
        });
        TweenMax.from(".centered3", 1, { opacity: 0, delay: 0.3, ease: Power3.easeOut})

    }
    render(){
        const { classes, theme } = this.props;
    return (
        <div className="centered3" align="center" style={{margin:60, display: "inline-block"}}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Avatar alt="Robson Hayashida" src={robson_hayashida} className={classes.avatar} />
                    <Typography gutterBottom variant="headline" component="h2">
                        ROBSON HAYASHIDA
                    </Typography>
                    <Typography component="p">
                        Director
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://www.linkedin.com/in/robson-hayashida-5061a114/" >
                    <Button size="small" color="primary">
                        View Linkedin
                    </Button>
                    </a>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
            <Card className={classes.card}>
                <CardContent>
                    <Avatar alt="Todd Katsuyama" src={todd_katsuyama} className={classes.avatar} />
                    <Typography gutterBottom variant="headline" component="h2">
                        TODD KATSUYAMA
                    </Typography>
                    <Typography component="p">
                      Business development advisor
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="https://www.linkedin.com/in/todd-katsuyama/" >
                        <Button size="small" color="primary">
                            View Linkedin
                        </Button>
                    </a>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Avatar alt="Hemant Sureshkumar" src={hemant_sureshkumar} className={classes.avatar} />
                            <Typography gutterBottom variant="headline" component="h2">
                                HEMANT SURESHKUMAR
                            </Typography>
                            <Typography component="p">
                                Software Engineer (intern)
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Avatar alt="Andrew Luk" src={andrew_luk} className={classes.avatar} />
                            <Typography gutterBottom variant="headline" component="h2">
                                ANDREW LUK
                            </Typography>
                            <Typography component="p">
                                Software Engineer
                            </Typography>
                        </CardContent>
                        <CardActions>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>



        </div>
    );
}

}
Team.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Team);
