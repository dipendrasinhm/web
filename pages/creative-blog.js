import React, { Component } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Bannar from '../components/creative-blog/Bannar';
import BlogBody from '../components/creative-blog/BlogBody';

export class index extends Component {
    render() {
        return (
            <>
                <Navbar />

                <Bannar />
                
                <BlogBody />

                <Footer />
            </>
        );
    }
}

export default index;
