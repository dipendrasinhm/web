import React, { Component } from 'react';

export class Funfacts extends Component {
    render() {
        return (
            <section className="funfacts-area ptb-120 bg-38d16a">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3>520</h3>
                                <p>Awards Winning</p>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3><span>99</span>%</h3>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3>3325</h3>
                                <p>Creative Projects</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="funfact">
                                <h3>54380</h3>
                                <p>Lines of Code</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="circle-top rotateme">
                    <img src="/images/circle-shape.png" alt="circle" />
                </div>
			    <div className="circle-bottom rotateme">
                    <img src="/images/circle-shape.png" alt="circle" />
                </div>
            </section>
        );
    }
}

export default Funfacts;
