import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Master from '../components/layoutes/Master';
import Products from '../components/product/Product';
import Home from '../components/mainpage/Home';
import Profile from '../components/user/Profile'
import Login from '../components/user/Login';
import Card from '../components/product/Card';


const RubbanShop = () => {
    return (
        <Master>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route path='/products' component={Products} />
                <Route path='/card' component={Card} />
                <Route path='/' exact component={Home} />
            </Switch>
        </Master>
    );
};

export default RubbanShop;