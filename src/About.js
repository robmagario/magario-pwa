import React from "react";

import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as $ from 'jquery';
import {TweenMax, Power2, Elastic} from "gsap";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TranslateIcon from '@material-ui/icons/Translate';
import international from './international.jpg';
import servers from './servers.png';
import mobile from './mobile.jpg';
import special_attention from './special_attention.jpg'

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
});





class About extends React.Component {


    componentDidMount(){
        $('body').css({
            "background-color": "#02c9c9",
            "font-family": 'Ubuntu',
            "color":"#61605"
        });
    }
    render(){
        const { classes, theme } = this.props;
    return (
        <div className="centered3" align="center" style={{margin:60, display: "inline-block"}}>
            <Grid container spacing={24}>
                <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={international}
                    title="International"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        INTERNATIONAL
                    </Typography>
                    <Typography component="p">
                        International staff to meet the needs of an international clientele. Multilingual services, multi-currency websites.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={servers}
                    title="Servers"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        SERVERS
                    </Typography>
                    <Typography component="p">
                       Having problems with your servers? We will fix it in a timely manner and boost it up. Apache to Nginx migration also available.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={mobile}
                    title="Mobile"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        MOBILE
                    </Typography>
                    <Typography component="p">
                        We make web apps that transition from desktop to mobile devices. Rediscover your audience on a whole new platform.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
                </Grid>
                <Grid item xs={12} sm={3}>

            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={special_attention}
                    title="Special Attention"
                />
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        SPECIAL CARE
                    </Typography>
                    <Typography component="p">
                        We work on only a handful of projects at a time to ensure our clients receive our full attention. Agile development and support. </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </CardActions>
            </Card>
                </Grid>
            </Grid>



        </div>
    );
}

}
About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
