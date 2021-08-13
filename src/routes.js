import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HomeEcommerce } from './Pages/EcommercePage/Home';
import PlanEcommerce from './Pages/EcommercePage/Plan';
import { LandingPage } from './Pages/LandingPage';


export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/ecommerce" component={HomeEcommerce} />
            <Route path="/ecommercePayment" component={PlanEcommerce} />
        </Switch>
    </BrowserRouter>
)