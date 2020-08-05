import React, { Fragment, useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const Login = () => {
    const [getImage, setImage] = useState('');
    const [getImages, setImages] = useState([]);
    let images;
    const handleSubmit = (event) => {
        event.preventDefault();
        images = [];
        if (localStorage.imagesSlider) {
            images = JSON.parse(localStorage.imagesSlider);
        }
        images.push(getImage);
        localStorage.setItem('imagesSlider', JSON.stringify(images));
        if (localStorage.imagesSlider) {
            let imagesUrl = JSON.parse(localStorage.imagesSlider);
            setImages(imagesUrl);
            // arr = imagesUrl;
        }
    };
    useEffect(() => {
        if (localStorage.imagesSlider) {
            let imagesUrl = JSON.parse(localStorage.imagesSlider);
            setImages(imagesUrl);
        }
    }, []);

    return (
        <Fragment>
            <div className="container">
                <div className="row p-4">
                    <div className="col-md-4 m-auto">
                        <form  >
                            <div className="form-group">
                                <textarea className="form-control" name="image" value={getImage} type="text" id="image" placeholder="آدرس تصویر" required
                                    onChange={(e) => {
                                        setImage(e.target.value);
                                    }}
                                >
                                </textarea>
                            </div>
                            <div className="form-group mb-0 text-center">
                                <button className="btn btn-success btn-block" onClick={handleSubmit} > ثبت  </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8 ">

                        <Carousel>
                            <Carousel>
                                {getImages.map((row,i) => (
                                    <Carousel.Item key={i}>
                                        <img
                                            className="d-block w-100"
                                            src={row}

                                        />

                                    </Carousel.Item>
                                ))}
                            </Carousel>

                        </Carousel>


                        {/* <div className="col-md-8">
                        <div id="demo" className="carousel slide " data-ride="carousel" style={{border:"1px solid gray"}}>
                        <ul className="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" className="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                            </ul>
                            <div className="carousel-inner">
                            {arr.map((row) => (
                                    <div className="carousel-item active">
                                    <img src={row} alt="" width="1100" height="500" />
                                    </div>
                                ))}
                            </div>
                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                                <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#demo" data-slide="next">
                                <span className="carousel-control-next-icon "></span>
                                </a>
                        </div>
                    </div> */}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;