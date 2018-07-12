import React, { Component } from "react";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';



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



class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputvalue: "",

        }
    }


    handleSubmit (event) {
        console.log('Form value: ' + this.state.inputvalue);
        event.preventDefault();
    }

    handleChange (event) {
        this.setState({
            inputvalue: event.target.value
        })
    }

    render() {
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>Name</label>
                <input type="text" value={this.state.inputvalue} onChange={this.handleChange.bind(this)}/>
                <input type="submit" value="Submit"/>
            </form>
                </Grid>

            </Grid>
        );
    }
}


Contact.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
