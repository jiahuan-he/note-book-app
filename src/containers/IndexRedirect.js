import React from 'react';
import {onLoginStateChange} from '../util/fb';
import {connect} from "react-redux";
import {ACTION} from "../util/constants";
import {Redirect} from "react-router-dom";

class IndexRedirect extends React.Component{

    componentDidMount(){
        this.unsubscrib = onLoginStateChange( (user) => {
            if (user) {
                this.props.dispatch({ type: ACTION.DETECT_LOGGED_IN, payload: {user: user}})
            }
        });
    }

    componentWillUnmount () {
        this.unsubscrib()
    }

    render(){

        return(
            <Redirect to={this.props.currentUser? '/Edit' : '/Login'}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser : state.currentUser,
    }
};


export default connect(mapStateToProps)(IndexRedirect);