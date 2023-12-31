import React, { Component } from 'react';
import Link from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export class index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div className="page-title-area item-bg1">
                    <div className="container">
                        <h1>FAQ</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div>

                <section className="faq-area ptb-120">
			        <div className="container">
				        <div className="faq-accordion">
                            <Accordion allowZeroExpanded preExpanded={['a']}>
                                <AccordionItem uuid="a">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            How do permissions work in Google Play Instant?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="b">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Is Smart Lock required for instant apps?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="c">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Can I have multiple activities in a single feature?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="d">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Can I share resources between features?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="e">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Is multidex supported for instant apps?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="f">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                        Can I share resources between features?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>

                                <AccordionItem uuid="g">
                                    <AccordionItemHeading>
                                        <AccordionItemButton>
                                            Is Smart Lock required for instant apps?
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. incididunt ut labore et dolore magna aliqua.</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        <div className="faq-contact">
                            <h3>Ask Your Question</h3>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" placeholder="Name" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6">
                                        <div className="form-group">
                                            <input type="email" placeholder="Email" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <input type="text" placeholder="Subject" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" cols="30" rows="6" placeholder="Message" className="form-control" />
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12">
                                        <button className="btn btn-primary" type="submit">Submit Now!</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <Footer />
            </>
        );
    }
}

export default index;
