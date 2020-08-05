import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Product = () => {
    const product = useSelector((state) => state.product);
    let card = [];
    const handleAdd = (product) => {
        
        let product1 = [product.id, product.title, product.description, product.imageUrl, 1];
        let flag = false;
        let pros = '';
        if(localStorage.productscard){
            pros = JSON.parse(localStorage.productscard);

            for (let index = 0; index < pros.length; index++) {
                let element = pros[index];

                if(element[0] == product1[0]){
                    // alert('qablan ezafe shode');
                    // return false;
                    element[4] += 1; 
                    flag = true;
                }
                
            }
        }
        if(flag){
            card = pros;
            localStorage.setItem('productscard', JSON.stringify(pros));
        } else{
            card.push(product1);
            localStorage.setItem('productscard', JSON.stringify(card));
        }

        // user.count += 1;
        // let product1 = [...product];
        // let proId = product1[0];
        // if (card == null) {
        //     product = product1;
        //     card = product;
        // } else {

        //     for (let i = 0; i <= card.length - 4; i += 5) {
        //         if (card[i] === proId) {
        //             user.count += 1;
        //             product1[4] = user.count;
        //             card[i + 4] = user.count;
            
        //             break;
                   
        //         }
        //     }
           
        //     product = product1;
        //     if (user.count === 1) {
        //         card.push(product);
        //     }

        // }

       
         };
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">


                        {product.map((product) => (
                            <div className="text-right"
                                key={product.id}
                            >
                                <img
                                    src={product.imageUrl}
                                    alt=""
                                />
                                <span>نام محصول : {product.title} </span>
                                <span>توضیحات : {product.description} </span>
                                <button onClick={() => { handleAdd(product) }} className="btn btn-primary" >افزودن به سبد خرید</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Product;