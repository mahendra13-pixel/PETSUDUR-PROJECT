import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Signup = () => {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        terms: false,
        newsletter: false
    });

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

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.firstName || !formData.lastName || !formData.email || 
            !formData.phone || !formData.password || !formData.confirmPassword) {
            alert('Please fill in all required fields');
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        if (!formData.terms) {
            alert('Please accept the Terms of Service');
            return;
        }

        try {
            // Replace with your actual signup API call
            // const response = await fetch('/api/auth/signup/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });
            
            // const data = await response.json();
            
            // if (response.ok) {
            //     // Signup successful
            //     setMessages([{ text: data.message, type: 'success' }]);
            //     // Redirect to login or dashboard
            //     setTimeout(() => {
            //         window.location.href = '/login';
            //     }, 2000);
            // } else {
            //     // Signup failed
            //     setMessages([{ text: data.message, type: 'error' }]);
            // }
            
            // For now, just show success message
            alert('Signup functionality would connect to Django backend');
            console.log('Signup attempt:', formData);
            
        } catch (error) {
            console.error('Signup error:', error);
            setMessages([{ text: 'Signup failed. Please try again.', type: 'error' }]);
        }
    };

    // Signup page specific styles
    const signupStyles = `
        .auth-section {
            min-height: 80vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #ffffff 0%, grey 100%);
            padding: 40px 20px;
        }

        .auth-container {
            width: 100%;
            max-width: 500px;
        }

        .auth-card {
            background: white;
            border-radius: 15px;
            padding: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .auth-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .auth-header h2 {
            color: #2c3e50;
            font-size: 28px;
            margin-bottom: 10px;
        }

        .auth-header p {
            color: #7f8c8d;
            font-size: 16px;
        }

        .auth-form {
            margin-bottom: 25px;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #2c3e50;
            font-weight: 600;
            font-size: 14px;
        }

        .form-group input {
            width: 100%;
            padding: 12px 15px;
            border: 2px solid #e0e0e0;
            border-radius: 8px;
            font-size: 14px;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .form-group input:focus {
            outline: none;
            border-color: #fd0808;
            box-shadow: 0 0 0 3px rgba(253, 8, 8, 0.1);
        }

        .checkbox {
            display: flex;
            align-items: center;
            gap: 8px;
            cursor: pointer;
            font-size: 14px;
            color: #5a6c7d;
        }

        .checkbox input {
            margin: 0;
        }

        .auth-btn {
            width: 100%;
            background: black;
            color: white;
            border: none;
            padding: 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
        }

        .auth-btn:hover {
            background: grey;
            transform: translateY(-2px);
        }

        .auth-footer {
            text-align: center;
            margin-top: 25px;
        }

        .auth-footer p {
            margin-bottom: 10px;
            color: grey;
        }

        .auth-footer a {
            color: black;
            text-decoration: none;
            font-weight: 600;
        }

        .auth-footer a:hover {
            text-decoration: underline;
        }

        .messages {
            margin-bottom: 20px;
        }

        .alert {
            padding: 12px 15px;
            border-radius: 6px;
            margin-bottom: 10px;
            font-size: 14px;
        }

        .alert-success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .alert-error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        @media (max-width: 768px) {
            .auth-container {
                padding: 0 15px;
            }
            
            .auth-card {
                margin: 20px 0;
                padding: 25px;
            }
            
            .form-row {
                grid-template-columns: 1fr;
            }
            
            /* Prevent zoom on iOS */
            input {
                font-size: 16px !important;
            }
        }

        @media (max-width: 480px) {
            .auth-section {
                padding: 20px 15px;
            }
            
            .auth-card {
                padding: 20px;
            }
            
            .auth-header h2 {
                font-size: 24px;
            }
            
            /* Better touch targets */
            .auth-btn {
                min-height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            /* Better form spacing */
            .form-group {
                margin-bottom: 15px;
            }
        }
    `;

    return (
        <div className="signup-page">
            <style>{signupStyles}</style>
            
            <Header user={user} />
            <Navbar user={user} onToggleMenu={toggleMobileMenu} onCloseMenu={closeMobileMenu} />

            <section className="auth-section">
                <div className="auth-container">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h2>Join PETSUDUR</h2>
                            <p>Become a member and help animals in need</p>
                        </div>

                        {messages.length > 0 && (
                            <div className="messages">
                                {messages.map((message, index) => (
                                    <div key={index} className={`alert alert-${message.type}`}>
                                        {message.text}
                                    </div>
                                ))}
                            </div>
                        )}

                        <form className="auth-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required 
                                        placeholder="Enter first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        required 
                                        placeholder="Enter last name"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="+977 98XXXXXXXX"
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required 
                                        placeholder="Create password"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input 
                                        type="password" 
                                        id="confirmPassword" 
                                        name="confirmPassword" 
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required 
                                        placeholder="Confirm password"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        name="terms" 
                                        checked={formData.terms}
                                        onChange={handleInputChange}
                                        required 
                                    />
                                    <span>
                                        I agree to the Terms of Service and Privacy Policy
                                    </span>
                                </label>
                            </div>

                            <div className="form-group">
                                <label className="checkbox">
                                    <input 
                                        type="checkbox" 
                                        name="newsletter" 
                                        checked={formData.newsletter}
                                        onChange={handleInputChange}
                                    />
                                    <span>
                                        Subscribe to newsletter and updates
                                    </span>
                                </label>
                            </div>

                            <button type="submit" className="auth-btn">
                                Create Account
                            </button>
                        </form>

                        <div className="auth-footer">
                            <p>
                                <span>Already have an account?</span>
                                <Link to="/login"> Login here</Link>
                            </p>
                            <p><Link to="/">← Back to Home</Link></p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Signup;