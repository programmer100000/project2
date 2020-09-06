import React,{ Fragment, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [getSideNav, setSideNav] = useState(false);
    const mainNavOnClick = () => {
        setSideNav(!getSideNav);
    };

    const returnMainNavValue = (
        <ul className="m-0 ">
            <li className="px-2 py-2">
                <Link to='/' className="text-white" >
                    <img src="./img/category.png" alt="" className="ml-1" />
                    <span>دسته بندی | <img src="./img/auction.png" alt=""/>سالن مزایده</span>
                    </Link>
            </li>
            <li className="px-2 py-2">
                <Link to='/' className="text-white" >
                    <img src="./img/store-icon.png" alt=""/>
                    <span>فروشگاه</span>
                </Link>
            </li>
            <li className="px-2 py-2">
            <Link to='/' className="text-white" >
                    <img src="./img/special-offer.png" alt=""/>
                    <span>پیشنهاد ویژه </span>
                    </Link>
            </li>
            <li className="px-2 py-2">
            <Link to='/' className="text-white" >
                    <img src="./img/discounts.png" alt=""/>
                    <span>تخفیف ها</span>
                    </Link>
            </li>
        </ul>

    );

    return (
        <Fragment>
            <header>
                <div className='container-fluid w-100 m-0 p-0 site-header'>
                    <div className="row w-100 m-0 p-0 top-nav align-content-center">
                        <div className="col-12 d-flex align-items-center justify-content-between m-0  pr-5">
                           <div className="col-10 top-nav-logo text-right ">
                               <a className="w-20" href='#' >
                                    <img className="w-20" src='./img/logo192.png' />
                                </a>
                           </div>
                           <div class="col-2 top-nav-links  d-flex p-0">
                            <NavLink to='/login' className='top-nav-login border border-dark px-2 pb-1  d-flex align-items-center'>
                                <button
                                    className='border-0 text-black'>
                                    <img className="" src='./img/user-login.png' />
                                </button>
                                <span class="top-nav-login-text text-black">
                                    ورود به حساب کاربری
                                </span>
                            </NavLink>
                            <div className="top-nav-search-store d-flex mt-2 align-items-center">
                                <div className="search d-flex border border-dark align-items-center p-1  ">
                                    <input type="text" className="form-control border-0" />
                                    <img className="" src='./img/search.png' />
                                </div>
                                <img className="top-nav-store-link mr-1" src='./img/store.png' />
                            </div>
                           </div>
                            
                            
                           
                        </div>
                        
                    </div>
                    <div className="row w-100 m-0 p-0 main-nav align-content-center" >

                        <div className='col-6 m-0 p-0 main-nav-menu d-flex text-right'>
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

                        <div className='col-6 m-0 p-0 main-nav-links'>
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