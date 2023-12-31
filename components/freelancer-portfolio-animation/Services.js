import React, { Component } from 'react';

export class Services extends Component {
    render() {
        return (
            <section className="services-area ptb-120 bg-f8f9fe">
                <div className="container">
                    <div className="section-title">
                        <span className="wow fadeInUp">My Services</span>
                        <h2 className="wow fadeInDown">Interactive services offered Me</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src="/images/blog-image/1.jpg" alt="image" />
                                
                                <div className="services-content">
                                    <h3><a href="#">Web Design</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src="/images/blog-image/2.jpg" alt="image" />
                                
                                <div className="services-content">
                                    <h3><a href="#">Web Development</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src="/images/blog-image/3.jpg" alt="image" />
                                
                                <div className="services-content">
                                    <h3><a href="#">Photography</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src="/images/blog-image/4.jpg" alt="image" />
                                
                                <div className="services-content">
                                    <h3><a href="#">Live Support</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src="/images/blog-image/5.jpg" alt="image" />
                                
                                <div className="services-content">
                                    <h3><a href="#">Content Writing</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="services-box">
                                <img src="/images/blog-image/6.jpg" alt="image" />
                                
                                <div className="services-content">
                                    <h3><a href="#">Timely Deliverables</a></h3>
                                    <p>Lorem ipsum dolor sit amet, consecte tuer adipiscing elit enean.</p>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="shape10 rotateme">
                    <img src="/images/shapes/10.png" alt="shape" />
                </div>
                <div className="shape6">
                    <img src="/images/shapes/6.png" alt="shape" />
                </div>
                <div className="shape2">
                    <img src="/images/shapes/2.png" alt="shape" />
                </div>
                <div className="shape3">
                    <img src="/images/shapes/3.png" alt="shape" />
                </div>
                <div className="shape23">
                    <img src="/images/shapes/23.png" alt="shape" />
                </div>
                <div className="shape21">
                    <img src="/images/shapes/21.png" alt="shape" />
                </div>
            </section>
        );
    }
}

export default Services;
