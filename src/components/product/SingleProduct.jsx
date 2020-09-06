import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../actions/singleproduct';
import { isEmpty } from 'lodash';

const SingleProduct = ({ match }) => {
    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(getSingleProduct(match.params.id));
    }, []);
    const product = useSelector((state) => state.singleproduct);
    return(
        <Fragment>
             {!isEmpty(product) ? (
       <div className="text-right">
       <img
           src={product.imageUrl}
           alt=""
           />
      <span>
       نام محصول : {product.title}
      </span>
       <span>توضیحات : {product.description} </span>
       <button  className="btn btn-primary">افزودن به سبد خرید</button>
</div>   
   ) : (
       <div>
                <p>
                      product not found!
                   </p>  
               </div>
   )}
            </Fragment>
    );
};

export default SingleProduct;
