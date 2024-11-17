import React from 'react';
import '../assets/Styles/Header.css'; // Make sure the correct path is used

function HeadingImage() {
    return (
        <div className="heading-container1">
            <div className="image-container">
                <img
                    src={require('../assets/images/banner.png')}
                    alt="Banner"
                    className="banner-image1"
                />
            </div>
            <h3 className="logo-heading3">SWASTIK</h3>
        </div>
    );
}

export default HeadingImage;
