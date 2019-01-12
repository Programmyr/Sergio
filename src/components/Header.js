import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            /* Main Header */
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">Football Player Finder</li>
                    </ol>
                </nav>
            </div>
        );
            /*END Main Header */
    }
}

export default Header;