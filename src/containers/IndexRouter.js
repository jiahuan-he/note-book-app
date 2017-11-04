import React from 'react';
import Login from './Login';
import App from './app';
import {BrowserRouter,Route } from 'react-router-dom'
import IndexRedirect from './IndexRedirect';

class Index extends React.Component{

    render(){

        return(
            <BrowserRouter basename={'/notebook'}>
                <div>
                    <Route exact path={`${process.env.PUBLIC_URL}/`} component={ IndexRedirect } />
                    <Route exact path={`${process.env.PUBLIC_URL}/login`} component={ Login } />
                    <Route exact path={`${process.env.PUBLIC_URL}/edit`} component={ App } />
                </div>
            </BrowserRouter>
        );
    }
}

export default Index;

