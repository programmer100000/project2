import { combineReducers } from 'redux';
import { productReduser } from './product';
import { singleProductReduser } from './singleproduct'


export const reducers = combineReducers({
    product: productReduser,
    singleproduct: singleProductReduser,
});