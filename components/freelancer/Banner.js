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
                                        <h1>I am a <br /> Web Designer</h1>

                                        <ul>
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

                                        <a href="/contact" className="btn btn-primary">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="circle-shape1"><img src="/images/shapes/circle1.png" alt="shape" /></div>
                <div className="circle-shape2"><img src="/images/shapes/circle2.png" alt="shape" /></div>
                <div className="circle-shape3"><img src="/images/shapes/circle3.png" alt="shape" /></div>
            </div>
        );
    }
}

export default Banner;
