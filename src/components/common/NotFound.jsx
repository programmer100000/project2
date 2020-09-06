import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Fragment>
            <div>
                <h1>خطای 404- صفحه یافت نشد!</h1>
                <Link to='/'>بازگشت به صفحه اصلی</Link>
            </div>
        </Fragment>
    );
};

export default NotFound;
