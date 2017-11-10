import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

export default (
    <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Contact} path="/talk" />
    </Switch>
);