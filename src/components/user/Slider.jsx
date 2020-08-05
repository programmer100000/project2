import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';


const Footer = ({arr1}) => {
    return (
        <Fragment>
            <Carousel>
                            <Carousel>
                                {arr1.map((row) => (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={row}

                                        />

                                    </Carousel.Item>
                                ))}
                            </Carousel>

                        </Carousel>
        </Fragment>
    );
};

export default Footer;