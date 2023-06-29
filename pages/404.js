import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {
    render() {
        return (
            <>
                <div className="error">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <h1>404</h1>
                            <h2>Page not found <i className="icofont-sad"></i></h2>
                            <Link href="/">
                                <a className="btn btn-primary">Back to Home</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Error;
