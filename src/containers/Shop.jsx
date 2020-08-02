import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Master from '../components/layoutes/Master';
import Products from '../components/product/Products';
import Home from '../components/mainpage/Home';
import Profile from '../components/user/Profile'
import Login from '../components/user/Login';


const RubbanShop = () => {
    return (
        <Master>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route path='/products' component={Products} />
                <Route path='/' exact component={Home} />
            </Switch>
        </Master>
    );
};

export default RubbanShop;