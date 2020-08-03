import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Shop from './Shop';
import { store } from '../store';
import { Provider } from 'react-redux';

const App = () => {
    return (

        <BrowserRouter >
       
        <Shop />
        </BrowserRouter >
    );
};

export default App;