import React from 'react';

import '../assets/Styles/Header.css';

function Header(){
    return (
        <header className="main-header">
            <div className="inner-wrapper">
                <a href='/' className="logo">
                    <img src="/banner.ico" alt="Swastik Enterprise Icon" className="company-logo" />
                    <h2 className="company-title">Swastik Enterprise</h2>
                </a>
            </div>
        </header>
    );
}

export default Header;