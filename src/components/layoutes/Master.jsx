import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../common/Header';
import Footer from '../common/Footer';

const Master = (props) => {
    return (
        <Fragment>
            <Helmet>
                <title>شاپ</title>
            </Helmet>
         <Header/>
            {props.children}
           <Footer/> 
        </Fragment>
    );
};

export default withRouter(Master);