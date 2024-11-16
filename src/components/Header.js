import React from 'react';

import '../assets/Styles/Header.css';

function Header(){
    return (
        <>
            <header className="header gap-4 items-start">
                <img src="/banner.ico" alt="Swastik Enterprise Icon" className="w-10 h-10 mr-0" />
                <h2><b>Swastik Enterprise</b></h2>
            </header>
        </>
    );
}

export default Header;