import React, { Component } from 'react';
import Link from 'next/link';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CheckoutForm from '../components/checkout/CheckoutForm';

export class index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <div className="page-title-area item-bg2">
                    <div className="container">
                        <h1>Checkout</h1>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>Home</a>
                                </Link>
                            </li>
                            <li>Checkout</li>
                        </ul>
                    </div>
                </div>

                <CheckoutForm />

                <Footer />
            </>
        );
    }
}

export default index;
