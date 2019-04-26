import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart';
import Default from './Default';

const Main = () => (
    <Switch>
        <Route exact path="/" component = {LandingPage} />
        <Route path="/store" component = {ProductList} />
        <Route path="/details" component = {Details} /> 
        <Route path="/cart" component = {Cart} />
        <Route component={Default}/>
    </Switch>
)

export default Main;