import React from 'react';
import FixedMenu from  '../components/Header'
import { Grid } from 'semantic-ui-react'

import NotebookPanel from './NotebookPanel';
import PagePanel from './PagePanel';
import EditorPanel from './EditorPanel';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import firebase  from '../util/fb';
import {ACTION} from '../util/constants';

class App extends React.Component{

    componentDidMount(){
        this.unsubscrib = firebase.auth().onAuthStateChanged( (user) => {
            if (!user) {
                this.props.dispatch({type: ACTION.DETECT_LOGGED_OUT})
            }
        });
    }

    componentWillUnmount () {
        this.unsubscrib();
    }

    render(){
        if(!this.props.currentUser){
            return (
                <Redirect to="/login"/>
            )
        }

        return (
            <div>
                <FixedMenu />
                <br/>
                <br/>
                <br/>
                    <Grid stackable divided={true} textAlign="left">
                        <Grid.Row  centered >
                            <NotebookPanel width={3}/>
                            <PagePanel width={3}/>
                            <EditorPanel width={10}/>
                        </Grid.Row>
                    </Grid>
            </div>
        )
    }
}

const mapSateToProps = (state)=> {
    return {
        currentUser: state.currentUser
    }
};

export default connect(mapSateToProps)(App)

