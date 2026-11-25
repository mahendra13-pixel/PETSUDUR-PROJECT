import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const HelpUs = () => {
    const [user, setUser] = useState(null);

    // Check authentication status
    useEffect(() => {
        const checkAuth = async () => {
            try {
                // const response = await fetch('/api/auth/check/');
                // const userData = await response.json();
                // setUser(userData.user);
            } catch (error) {
                console.error('Auth check failed:', error);
            }
        };
        checkAuth();
    }, []);

    // Mobile navigation functionality
    const toggleMobileMenu = () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.classList.toggle('active');
        }
    };

    const closeMobileMenu = () => {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
            navLinks.classList.remove('active');
        }
    };

    // Help Us page specific styles
    const helpUsStyles = `
        .help-hero {
            background: linear-gradient(135deg, #780202 0%, #5a0101 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .help-hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .help-hero p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        
        .qr-section {
            padding: 60px 0;
            background: #f8f9fa;
        }
        
        .qr-container {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            padding: 40px;
            border-radius: 12px;
            border: 2px solid #e9ecef;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        .qr-display {
            margin: 30px 0;
        }
        
        .qr-image {
            width: 300px;
            height: 300px;
            border-radius: 8px;
            border: 2px solid #e9ecef;
            object-fit: cover;
        }
        
        .esewa-info {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        
        .esewa-id {
            font-size: 20px;
            font-weight: bold;
            color: #780202;
            margin: 10px 0;
        }
        
        .instructions {
            background: #fff5f5;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: left;
        }
        
        .instructions h4 {
            color: #780202;
            margin-bottom: 10px;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .help-hero {
                padding: 60px 0;
            }
            
            .help-hero h1 {
                font-size: 36px;
            }
            
            .qr-container {
                padding: 25px;
                margin: 0 15px;
            }
            
            .qr-image {
                width: 250px;
                height: 250px;
            }
        }
        
        @media (max-width: 480px) {
            .help-hero h1 {
                font-size: 28px;
            }
            
            .qr-container {
                padding: 20px;
            }
            
            .qr-image {
                width: 200px;
                height: 200px;
            }
        }
    `;

    return (
        <div className="helpus-page">
            {/* Inject Help Us specific styles */}
            <style>{helpUsStyles}</style>
            
            <Header user={user} />
            <Navbar user={user} onToggleMenu={toggleMobileMenu} onCloseMenu={closeMobileMenu} />

            {/* Help Hero Section */}
            <section className="help-hero">
                <div className="container">
                    <h1>Support Our Mission</h1>
                    <p>Scan the QR code to donate via eSewa and help us care for animals in need</p>
                </div>
            </section>

            {/* QR Section */}
            <section className="qr-section">
                <div className="container">
                    <div className="qr-container">
                        <h2 style={{color: '#780202', marginBottom: '20px'}}>Donate via eSewa</h2>
                        
                        {/* QR Display */}
                        <div className="qr-display">
                            <img 
                                src="https://scontent.fmey1-1.fna.fbcdn.net/v/t39.30808-6/590628545_851647787268985_8570872900478028969_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=3QrV-a7FliwQ7kNvwG1SFUE&_nc_oc=Adl8AR-XyV-72uWjrav4u6J_NxAdpgtrV2UsdBg1CXWuxVGIzVaF8A9pOIt06F3vfJM&_nc_zt=23&_nc_ht=scontent.fmey1-1.fna&_nc_gid=gbPc7iaXJB9UgZRZiE_mJA&oh=00_AfgLUyTYmcgGx-7eLBVKUTRPqjwjkfV2_n5aRdnmem-KaA&oe=693228D2" 
                                alt="eSewa QR Code" 
                                className="qr-image"
                            />
                        </div>

                        {/* eSewa Info */}
                        <div className="esewa-info">
                            <strong>eSewa ID:</strong>
                            <div className="esewa-id">9742386629</div>
                            <p style={{margin: '5px 0 0 0', fontSize: '14px', color: '#666'}}>
                                You can also send directly to this eSewa ID
                            </p>
                        </div>

                        {/* Instructions */}
                        <div className="instructions">
                            <h4>How to Donate:</h4>
                            <p>1. Open your eSewa app</p>
                            <p>2. Tap on "Scan & Pay"</p>
                            <p>3. Scan the QR code above</p>
                            <p>4. Enter donation amount</p>
                            <p>5. Complete payment</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HelpUs;