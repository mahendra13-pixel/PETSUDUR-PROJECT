import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Contact = () => {
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

    // Contact page specific styles
    const contactStyles = `
        .contact-hero {
            background: linear-gradient(135deg, #780202 0%, #5a0101 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .contact-hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .contact-hero p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        
        .contact-content {
            padding: 60px 0;
            background: #f8f9fa;
        }
        
        .contact-info {
            background: white;
            padding: 40px;
            border-radius: 12px;
            border: 2px solid #e9ecef;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            max-width: 800px;
            margin: 0 auto;
        }
        
        .contact-section {
            margin-bottom: 30px;
        }
        
        .contact-section h2 {
            color: #780202;
            font-size: 28px;
            margin-bottom: 20px;
            border-bottom: 2px solid #780202;
            padding-bottom: 10px;
        }
        
        .contact-section p {
            color: #333;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 15px;
        }
        
        .contact-details {
            background: #f8f9fa;
            padding: 25px;
            border-radius: 8px;
            border-left: 4px solid #780202;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            padding: 10px;
            background: white;
            border-radius: 6px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .contact-icon {
            background: #780202;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            flex-shrink: 0;
        }
        
        .contact-text {
            flex: 1;
        }
        
        .contact-text strong {
            color: #780202;
        }
        
        .phone-numbers {
            margin-left: 20px;
        }
        
        .phone-number {
            margin-bottom: 8px;
            padding: 5px 0;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-link {
            background: #780202;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            text-decoration: none;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .social-link:hover {
            background: #5a0101;
            transform: translateY(-2px);
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .contact-hero {
                padding: 60px 0;
            }
            
            .contact-hero h1 {
                font-size: 36px;
            }
            
            .contact-info {
                padding: 25px;
                margin: 0 15px;
            }
            
            .contact-section h2 {
                font-size: 24px;
            }
            
            .contact-item {
                flex-direction: column;
                text-align: center;
                gap: 10px;
            }
            
            .contact-icon {
                margin-right: 0;
            }
            
            .social-links {
                flex-direction: column;
                align-items: center;
            }
            
            .social-link {
                width: 200px;
                justify-content: center;
            }
        }
        
        @media (max-width: 480px) {
            .contact-hero h1 {
                font-size: 28px;
            }
            
            .contact-info {
                padding: 20px;
            }
            
            .contact-section h2 {
                font-size: 22px;
            }
            
            .phone-numbers {
                margin-left: 10px;
            }
        }
    `;

    return (
        <div className="contact-page">
            {/* Inject Contact-specific styles */}
            <style>{contactStyles}</style>
            
            <Header user={user} />
            <Navbar user={user} onToggleMenu={toggleMobileMenu} onCloseMenu={closeMobileMenu} />

            {/* Contact Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <h1>Contact Us</h1>
                    <p>Feel free to reach out to us for any inquiries or feedback. We'd love to hear from you. Thank you</p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-content">
                <div className="container">
                    <div className="contact-info">
                        <div className="contact-section">
                            <h2>Contact Information</h2>
                            <div className="contact-details">
                                {/* Email */}
                                <div className="contact-item">
                                    <div className="contact-icon">📧</div>
                                    <div className="contact-text">
                                        <strong>Email:</strong> info@petsudur.org
                                    </div>
                                </div>

                                {/* Phone Numbers */}
                                <div className="contact-item">
                                    <div className="contact-icon">📞</div>
                                    <div className="contact-text">
                                        <strong>Phone:</strong>
                                        <div className="phone-numbers">
                                            <div className="phone-number">• Mahendra Kunwar: 9848444014</div>
                                            <div className="phone-number">• Dr. Krishna Bahadur Sodari: 9843757325</div>
                                            <div className="phone-number">• Arbin Kunwar: 9742387566</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="contact-item">
                                    <div className="contact-icon">📍</div>
                                    <div className="contact-text">
                                        <strong>Address:</strong> Sanfebagar, Achham
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Follow Us Section */}
                        <div className="contact-section">
                            <h2>Follow Us</h2>
                            <p>Stay connected with us on social media for updates and news:</p>
                            <div className="social-links">
                                <a href="#" className="social-link">
                                    <span>📘</span> Facebook
                                </a>
                                <a href="#" className="social-link">
                                    <span>📷</span> Instagram
                                </a>
                                <a href="#" className="social-link">
                                    <span>🐦</span> Twitter
                                </a>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="contact-section">
                            <h2>Get In Touch</h2>
                            <p>We're always happy to help with any questions about our animal welfare programs, vaccination camps, sterilization services, or if you want to volunteer with us.</p>
                            <p>Your support helps us continue our mission to protect and care for animals in the Far Western region of Nepal.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;