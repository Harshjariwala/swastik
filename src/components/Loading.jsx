import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../assets/Styles/Loading.css'; // Assuming the CSS is in Loading.css

function Loading() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate(); // Initialize the navigate hook

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); // Set loading to false after 3 seconds
            navigate('/login');  // Redirect to the LoginPage after loading
        }, 3000);
    }, [navigate]);

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="image-container">
                    <img 
                        src={require('../assets/images/banner.png')} 
                        alt="Banner" 
                        className="banner-image" 
                    />
                </div>
                <h1 className="logo-heading">SWASTIK</h1>
            </div>
        );
    }

    // Render the main content after loading (redirects to login)
    return null;  // We don't need to return anything else, as the navigation will happen after the loading
}

export default Loading;
