import { combineReducers } from 'redux';
import { productReduser } from './product';


export const reducers = combineReducers({
    product: productReduser

});