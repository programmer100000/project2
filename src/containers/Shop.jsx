import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Master from '../components/layoutes/Master';
import Products from '../components/product/Product';
import SingleProduct from '../components/product/SingleProduct';
import Home from '../components/mainpage/Home';
import Profile from '../components/user/Profile'
import Login from '../components/user/Login';
import Cart from '../components/product/Cart';
import MapPicker from '../components/Mappicker';
import NotFound from '../components/common/NotFound';



const RubbanShop = () => {
    return (
        <Master>
            <Switch>
                <Route path='/mappicker' component={MapPicker} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
                <Route path='/products' component={Products} />
                <Route path='/product/:id' component={SingleProduct} />
                <Route path='/cart' component={Cart} />
                <Route path='/' exact component={Home} />
                <Route path='*' exact component={NotFound} />
                
            </Switch>
        </Master>
    );
};

export default RubbanShop;