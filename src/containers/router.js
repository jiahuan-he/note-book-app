import React from 'react';
import Login from './login';
import App from './app';
import { BrowserRouter,Route } from 'react-router-dom'
import firebase from '../util/fb';

const Index = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/edit" component={App}/>
        </div>
    </BrowserRouter>
);


export default Index;
