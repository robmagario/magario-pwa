import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Info from '@material-ui/icons/Info';
import PermMedia from '@material-ui/icons/PermMedia';


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

class Footer extends React.Component {
    constructor () {
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden () {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render() {

        return (


            <div className="fab">
                <Button onClick={this.toggleHidden.bind(this)} elevation={2} color="primary" aria-label="add"
                        className="classes.fab"><Info style={{
                    backgroundColor: 'white',
                    borderRadius: '50%', width: '40', height: '40',
                }}/>
                </Button>
                {!this.state.isHidden && <Child />}

            </div>


        );

    }
}
const Child = () => (
    <ul className="fab-buttons">
        <li className="fab-buttons__item">
            <a href="https://www.facebook.com/MagarioInternational/" className="fab-buttons__link"
               data-tooltip="Facebook">
                <i className="icon-material icon-material_fb"></i>
            </a>
        </li>
        <li className="fab-buttons__item">
            <a href="/portfolio" className="fab-buttons__link" data-tooltip="Portfolio">
                <i><PermMedia style={{width: '20', height: '20', marginTop: '10'}}/></i>
            </a>
        </li>

    </ul>
)

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
