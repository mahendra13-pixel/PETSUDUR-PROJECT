import React, { useState, useEffect } from 'react';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const About = () => {
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

    // Team members data
    const teamMembers = [
        { id: 1, name: "Mahendra Kunwar", position: "IT Manager", contact: "N/A", image: "https://via.placeholder.com/80x80?text=M.K" },
        { id: 2, name: "Manoj Kunwar", position: "President", contact: "9866101290", image: "https://via.placeholder.com/80x80?text=M.K" },
        { id: 3, name: "Shekhar Kunwar", position: "Vice President", contact: "N/A", image: "https://via.placeholder.com/80x80?text=S.K" },
        { id: 4, name: "Mahendra Kunwar", position: "Advisor", contact: "N/A", image: "https://via.placeholder.com/80x80?text=M.K" },
        { id: 5, name: "Ravindra Tiruwa", position: "Vet Assistant", contact: "N/A", image: "https://via.placeholder.com/80x80?text=R.T" },
        { id: 6, name: "Upendra Kunwar", position: "Member", contact: "N/A", image: "https://via.placeholder.com/80x80?text=U.K" },
        { id: 7, name: "Sandesh Kunwar", position: "Member", contact: "N/A", image: "https://via.placeholder.com/80x80?text=S.K" },
        { id: 8, name: "Firoj Kunwar", position: "Member", contact: "N/A", image: "https://via.placeholder.com/80x80?text=F.K" },
        { id: 9, name: "Dipesh Kunwar", position: "Member", contact: "N/A", image: "https://via.placeholder.com/80x80?text=D.K" }
    ];

    // About page specific styles
    const aboutStyles = `
        .about-hero {
            background: linear-gradient(135deg, #780202 0%, #5a0101 100%);
            color: white;
            padding: 80px 0;
            text-align: center;
        }
        
        .about-hero h1 {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .about-hero p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
        
        .management-team {
            padding: 60px 0;
            background: #f8f9fa;
        }
        
        .team-member {
            display: flex;
            align-items: center;
            background: white;
            padding: 25px;
            margin-bottom: 20px;
            border-radius: 12px;
            border: 2px solid #e9ecef;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            gap: 20px;
        }
        
        .team-member:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            border-color: #780202;
        }
        
        .member-serial {
            background: #780202;
            color: white;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 18px;
            flex-shrink: 0;
            box-shadow: 0 4px 10px rgba(120, 2, 2, 0.3);
        }
        
        .member-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            overflow: hidden;
            flex-shrink: 0;
            border: 3px solid #780202;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }
        
        .member-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .member-details {
            flex: 1;
        }
        
        .member-name {
            color: #333;
            margin-bottom: 8px;
            font-size: 20px;
            font-weight: bold;
        }
        
        .member-position {
            color: #780202;
            margin-bottom: 10px;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.4;
        }
        
        .member-contact {
            color: #666;
            margin-bottom: 0;
            font-size: 14px;
        }
        
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .about-hero {
                padding: 60px 0;
            }
            
            .about-hero h1 {
                font-size: 36px;
            }
            
            .team-member {
                padding: 20px;
                flex-direction: column;
                text-align: center;
                gap: 15px;
            }
            
            .member-image {
                width: 70px;
                height: 70px;
            }
        }
    `;

    return (
        <div className="about-page">
            {/* Inject About-specific styles */}
            <style>{aboutStyles}</style>
            
            <Header user={user} />
            <Navbar user={user} onToggleMenu={toggleMobileMenu} onCloseMenu={closeMobileMenu} />

            {/* About Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1>About PETSUDUR</h1>
                    <p>We are a dedicated team working for animal welfare in Achham and Far Western region of Nepal</p>
                </div>
            </section>

            {/* Management Team */}
            <section className="management-team">
                <div className="container">
                    <h2 style={{ textAlign: 'center', color: '#780202', marginBottom: '40px' }}>
                        Our Management Team
                    </h2>
                    
                    {teamMembers.map((member) => (
                        <TeamMember key={member.id} member={member} />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

// Team Member Component
const TeamMember = ({ member }) => {
    const handleImageError = (e) => {
        e.target.src = 'https://via.placeholder.com/80x80?text=Avatar';
    };

    return (
        <div className="team-member">
            <div className="member-serial">
                {member.id.toString().padStart(2, '0')}
            </div>
            <div className="member-image">
                <img 
                    src={member.image} 
                    alt={member.name}
                    onError={handleImageError}
                />
            </div>
            <div className="member-details">
                <h4 className="member-name">{member.name}</h4>
                <p className="member-position">{member.position}</p>
                <p className="member-contact">📞 Contact: {member.contact}</p>
            </div>
        </div>
    );
};

export default About;