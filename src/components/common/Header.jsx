import React, { Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [getSideNav, setSideNav] = useState(false);
    const mainNavOnClick = () => {
        setSideNav(!getSideNav);
    };

    const returnMainNavValue = (
        <ul className="m-0 ">
            <li className="px-3 py-2">
                <Link to='/' className="text-white" >صفحه اصلی</Link>
            </li>
            <li className="px-3 py-2">
                <Link to='products' className="text-white">محصولات</Link>
            </li>
            <li className="px-3 py-2">
                <a href='#' className="text-white">صفحه 2</a>
            </li>
            <li className="px-3 py-2">
                <a href='#' className="text-white">صفحه 3</a>
            </li>
            <li className="px-3 py-2">
                <a href='#' className="text-white" >صفحه 4</a>
            </li>
        </ul>

    );

    return (
        <Fragment>
            <header>
                <div className='container-fluid w-100 m-0 p-0'>
                    <div className="row w-100 m-0 p-0 top-nav align-items-center">
                        <div className="col-6 top-nav-item top-nav-logo text-right">
                            <a className="w-20" href='#' >
                                <img className="w-20" src='./img/logo192.png' />
                            </a>
                        </div>
                        <div className="col-6 top-nav-item top-nav-links ">
                            <NavLink to='/login' className='top-nav-login '>
                                <button
                                    className='border-0 text-white'>
                                    <i className='fa fa-user'></i>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="row w-100 m-0 p-0 main-nav align-items-center" >

                        <div className='col-8 main-nav-menu d-flex text-right'>
                            <button
                                className="mob-main-nav-menu-btn d-block d-sm-none p-1 border-0 text-white"
                                onClick={mainNavOnClick}
                            >
                                <i className='fa fa-bars'></i>
                            </button>
                            <div className="d-none d-sm-block">
                                {returnMainNavValue}
                            </div>
                        </div>

                        <div className='col-4 main-nav-links'>
                            <button
                                className='main-nav-item main-nav-search p-1 border-0 text-white ml-2'>
                                <i
                                    className='fa fa-search'
                                ></i>
                            </button>
                            <button
                                className='main-nav-item main-nav-shopping-card p-1 border-0 text-white '>
                                <Link className='text-white' to='/cart'>
                                    <i className='fa fa-shopping-cart'></i>
                                </Link>
                            </button>
                        </div>

                        <div id='main-nav-sidenav' className={getSideNav ? 'showSideNav' : null}>
                            <div id='main-nav-sidenav-header'>
                                <a href='#'>
                                    <img src='./img/logo192.png' />
                                </a>
                            </div>
                            <div id='main-nav-sidenav-body'>
                                {returnMainNavValue}
                            </div>
                        </div>
                        <div
                            id='main-nav-overlay'
                            className={getSideNav ? 'showSideNav' : null}
                            onClick={mainNavOnClick}
                        ></div>
                    </div>
                </div>
            </header>
        </Fragment >
    );
};

export default Header;