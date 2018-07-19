import React from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import PermMedia from '@material-ui/icons/PermMedia';
import blue from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    button: {
        //margin: theme.spacing.unit,
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        backgroundColor: '#ffffff',
    },

    fab_buttons: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 50,
    list_style: 'none',
    margin: 0,
    padding: 0,
    opacity: 0,
    visibility: 'hidden',
    transition: 0.2,
},
    
});


function  Footer(props) {
    const { classes } = props;
    return (



                <div className="fab">
                    <Button elevation={2} color="primary" aria-label="add" className="classes.fab"><Info style={{backgroundColor: 'white',
                        borderRadius: '50%', width:'40', height:'40',}}/>
                    </Button>


                    <ul className="fab-buttons">
                        <li className="fab-buttons__item">
                            <a href="https://www.facebook.com/MagarioInternational/" className="fab-buttons__link" data-tooltip="Facebook">
                                <i className="icon-material icon-material_fb"></i>
                            </a>
                        </li>
                        <li className="fab-buttons__item">
                            <a href="/portfolio" className="fab-buttons__link" data-tooltip="Portfolio">
                                <i ><PermMedia style={{width:'20',height:'20',marginTop:'10'}}/></i>
                            </a>
                        </li>

                    </ul>
                </div>



);

}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
