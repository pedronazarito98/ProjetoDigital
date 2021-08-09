import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HomeEcommerce } from './Pages/EcommercePage/Home';
import PaymentPage  from './Pages/EcommercePage/Payment';
import {LandingPage}  from './Pages/LandingPage';


export default() => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route  path="/ecommerce" component={HomeEcommerce}/>
            <Route  path="/ecommercePayment" component={PaymentPage}/>
        </Switch>
    </BrowserRouter>
)