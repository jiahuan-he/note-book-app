import React from 'react';
import Login from './Login';
import App from './app';
import {BrowserRouter,Route } from 'react-router-dom'
import IndexRedirect from './IndexRedirect';

class Index extends React.Component{

    render(){

        return(
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={ IndexRedirect } />
                    <Route exact path="/login" component={ Login } />
                    <Route exact path="/edit" component={ App } />
                </div>
            </BrowserRouter>
        );
    }
}

export default Index;

