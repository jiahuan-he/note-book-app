import React from 'react';
import FixedMenu from  '../components/Header'
import { Grid } from 'semantic-ui-react'
import {detectLoggedOutAction} from "../actions/actionCreators";
import NotebookPanel from './NotebookPanel';
import PagePanel from './PagePanel';
import EditorPanel from './EditorPanel';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {onLoginStateChange}  from '../util/fb';

class App extends React.Component{

    componentDidMount(){
        this.unsubscrib = onLoginStateChange( (user) => {
            if (!user) {
                this.props.onDetectLoggedOut();
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



const mapDispatchToProps = dispatch => {
    return {
        onDetectLoggedOut: () => {
            dispatch(detectLoggedOutAction());
        }
    }
};

const mapSateToProps = (state)=> {
    return {
        currentUser: state.currentUser
    }
};

export default connect(mapSateToProps, mapDispatchToProps)(App)

