import React from 'react';
import FixedMenu from  '../components/Header'
import { Grid } from 'semantic-ui-react'

import NotebookPanel from './NotebookPanel';
import PagePanel from './PagePanel';
import EditorPanel from './EditorPanel';
import Login from './login';

import { BrowserRouter,Route } from 'react-router-dom'

class App extends React.Component{

    render(){
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

const AppLogin = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Login}/>
            <Route exact path="/edit" component={App}/>
        </div>
    </BrowserRouter>
);



export default AppLogin;
