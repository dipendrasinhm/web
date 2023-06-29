import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactForm from '../components/Contact/ContactForm';

export class Contact extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>

                <section className="contact-info-area pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-email"></i>
                                    </div>
                                    <h3>Mail Here</h3>
                                    <p><a href="mailto:admin@fleja.com">admin@fleja.com</a></p>
                                    <p><a href="mailto:info@fleja.com">info@fleja.com</a></p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-google-map"></i>
                                    </div>
                                    <h3>Visit Here</h3>
                                    <p>1660 Travis Street Miramar, <br /> FL 33025, California</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="contact-info-box">
                                    <div className="icon">
                                        <i className="icofont-phone"></i>
                                    </div>
                                    <h3>Call Here</h3>
                                    <p><a href="tel:+123 456 7890">+1234567890</a></p>
                                    <p><a href="tel:+2414524526">+241 452 4526</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <ContactForm />
                 
                <Footer />
            </>
        );
    }
}

export default Contact;
