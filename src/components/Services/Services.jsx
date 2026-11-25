import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Services = () => {
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

    // Services page specific styles
    const servicesStyles = `
        .services-hero {
            background: linear-gradient(135deg, #780202 0%, #5a0101 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .services-hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .services-hero p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        
        .services-content {
            padding: 60px 0;
            background: #f8f9fa;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .service-item {
            background: white;
            padding: 30px 25px;
            border-radius: 12px;
            border: 2px solid #e9ecef;
            text-align: center;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        
        .service-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-color: #780202;
        }
        
        .service-icon {
            font-size: 50px;
            margin-bottom: 20px;
        }
        
        .service-item h3 {
            color: #780202;
            font-size: 24px;
            margin-bottom: 15px;
            font-weight: bold;
        }
        
        .service-item p {
            color: #666;
            font-size: 16px;
            line-height: 1.6;
            text-align: center;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .services-hero {
                padding: 60px 0;
            }
            
            .services-hero h1 {
                font-size: 36px;
            }
            
            .services-grid {
                grid-template-columns: 1fr;
                padding: 0 15px;
                gap: 20px;
            }
            
            .service-item {
                padding: 25px 20px;
            }
            
            .service-icon {
                font-size: 45px;
            }
            
            .service-item h3 {
                font-size: 22px;
            }
        }
        
        @media (max-width: 480px) {
            .services-hero h1 {
                font-size: 28px;
            }
            
            .service-item {
                padding: 20px 15px;
            }
            
            .service-icon {
                font-size: 40px;
            }
            
            .service-item h3 {
                font-size: 20px;
            }
            
            .service-item p {
                font-size: 14px;
            }
        }
    `;

    return (
        <div className="services-page">
            {/* Inject Services specific styles */}
            <style>{servicesStyles}</style>
            
            <Header user={user} />
            <Navbar user={user} onToggleMenu={toggleMobileMenu} onCloseMenu={closeMobileMenu} />

            {/* Services Hero Section */}
            <section className="services-hero">
                <div className="container">
                    <h1>Our Services</h1>
                    <p>Comprehensive animal welfare services to protect, care for, and improve the lives of animals in our community</p>
                </div>
            </section>

            {/* Services Content */}
            <section className="services-content">
                <div className="container">
                    <div className="services-grid">
                        <div className="service-item">
                            <div className="service-icon">💉</div>
                            <h3>We Vaccinate</h3>
                            <p>We conduct regular vaccination camps to protect dogs against rabies and other diseases, ensuring community safety and animal health.</p>
                        </div>
                        
                        <div className="service-item">
                            <div className="service-icon">🔬</div>
                            <h3>We Sterilize</h3>
                            <p>Our sterilization programs help control stray population growth humanely, reducing suffering and improving animal welfare.</p>
                        </div>
                        
                        <div className="service-item">
                            <div className="service-icon">❤️</div>
                            <h3>We Care</h3>
                            <p>We provide medical care, rescue services, and rehabilitation for injured and sick animals, giving them a second chance at life.</p>
                        </div>
                        
                        <div className="service-item">
                            <div className="service-icon">📚</div>
                            <h3>We Educate</h3>
                            <p>We conduct awareness programs in communities to promote responsible pet ownership and animal welfare practices.</p>
                        </div>
                        
                        <div className="service-item">
                            <div className="service-icon">🏥</div>
                            <h3>We Rescue</h3>
                            <p>Emergency rescue operations for animals in distress, providing immediate medical attention and shelter.</p>
                        </div>
                        
                        <div className="service-item">
                            <div className="service-icon">🤝</div>
                            <h3>We Collaborate</h3>
                            <p>Working with local communities, government bodies, and other NGOs to maximize our impact and reach.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Services;