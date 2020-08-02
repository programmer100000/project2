import React, { Fragment } from 'react';


const Footer = () => {
    return (
        <Fragment>
            <div className='container-fluid m-0 p-0'>
                <div className="row w-100 m-0 p-0 top-footer align-items-center">
                    <div className="col-md-6 footer-sec footer-number  text-white p-4">
                        <span>شماره تماس : 0211234567</span>
                    </div>
                    <div className="col-md-6 footer-sec p-4 ">
                        <img className="mx-2" src="./img/top-footer1.png" />
                        <img className="mx-2" src="./img/top-footer1.png" />
                        <img className="mx-2" src="./img/top-footer1.png" />

                    </div>
                </div>
                <div className="row w-100 m-0 p-0 bottom-footer align-items-center">
                    <div className="col-md-6 footer-sec footer-about p-4 text-white ">
                        <p>به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد.  </p>
                    </div>
                    <div className="col-md-6 footer-sec p-4 ">
                        <img className="mx-2" src="./img/bottom-footer1.png" />
                        <img className="mx-2" src="./img/bottom-footer1.png" />
                        <img className="mx-2" src="./img/bottom-footer1.png" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;