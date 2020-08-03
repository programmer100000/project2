import {
    getproducts
} from '../services/productService';

export const getProduct = () => {
    return async(dispatch) => {
        const data = await getproducts();
        await dispatch({ type: 'GETPRODUCTS', payload: data });
    };
};