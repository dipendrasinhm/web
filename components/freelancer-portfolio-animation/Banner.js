import React, { Component } from 'react';
import Link from 'next/link';

export class Banner extends Component {
    render() {
        return (
            <div className="main-banner freelancer-portfolio-home">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row h-100 align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src="/images/man2.png" alt="man" />
                                    </div>
                                </div>
                                
                                <div className="col-lg-6 col-md-12">
                                    <div className="hero-content">
                                        <h1 className="wow fadeInUp">I am a <br /> Web Designer</h1>
                                        <ul className="wow fadeInDown">
                                            <li>
                                                <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                                    <i className="icofont-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" className="twitter" target="_blank">
                                                    <i className="icofont-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.pinterest.com/" className="pinterest" target="_blank">
                                                    <i className="icofont-pinterest"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.behance.net/" className="behance" target="_blank">
                                                    <i className="icofont-behance"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://dribbble.com/" className="dribbble" target="_blank">
                                                    <i className="icofont-dribbble"></i>
                                                </a>
                                            </li>
                                        </ul>

                                        <p>Lorem ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        
                                        <a href="/contact" className="btn btn-primary wow fadeInUp">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape1">
                    <img src="/images/shapes/1.png" alt="shape" />
                </div>
                <div className="shape2">
                    <img src="/images/shapes/2.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shapes/3.png" alt="shape" />
                </div>
                <div className="shape4">
                    <img src="/images/shapes/4.png" alt="shape" />
                </div>
                <div className="shape5">
                    <img src="/images/shapes/5.png" alt="shape" />
                </div>
                <div className="shape6">
                    <img src="/images/shapes/6.png" alt="shape" />
                </div>
                <div className="shape7">
                    <img src="/images/shapes/7.png" alt="shape" />
                </div>
                <div className="shape8">
                    <img src="/images/shapes/8.png" alt="shape" />
                </div>
                <div className="shape9 rotateme">
                    <img src="/images/shapes/9.png" alt="shape" />
                </div>
                <div className="shape10 rotateme">
                    <img src="/images/shapes/10.png" alt="shape" />
                </div>
                <div className="circle-shape1">
                    <img src="/images/shapes/circle1.png" alt="shape" />
                </div>
                <div className="circle-shape2">
                    <img src="/images/shapes/circle2.png" alt="shape" />
                </div>
                <div className="circle-shape3">
                    <img src="/images/shapes/circle3.png" alt="shape" />
                </div>
            </div>
        );
    }
}

export default Banner;
