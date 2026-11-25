import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Login = () => {
    const [user, setUser] = useState(null);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [messages, setMessages] = useState([]);

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
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Simple validation
        if (!formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }

        try {
            // Replace with your actual login API call
            // const response = await fetch('/api/auth/login/', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(formData)
            // });
            
            // const data = await response.json();
            
            // if (response.ok) {
            //     // Login successful
            //     localStorage.setItem('token', data.token);
            //     window.location.href = '/dashboard';
            // } else {
            //     // Login failed
            //     setMessages([{ text: data.message, type: 'error' }]);
            // }
            
            // For now, just show success message
            alert('Login functionality would connect to Django backend');
            console.log('Login attempt:', formData);
            
        } catch (error) {
            console.error('Login error:', error);
            setMessages([{ text: 'Login failed. Please try again.', type: 'error' }]);
        }
    };

    // Login page specific styles
    const loginStyles = `
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

        .form-options {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 25px;
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

        .forgot-password {
            color: black;
            text-decoration: none;
            font-size: 14px;
        }

        .forgot-password:hover {
            text-decoration: underline;
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
            .auth-card {
                padding: 30px 25px;
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
                padding: 25px 20px;
                margin: 10px;
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
        }
    `;

    return (
        <div className="login-page">
            <style>{loginStyles}</style>
            
            <Header user={user} />
            <Navbar user={user} onToggleMenu={toggleMobileMenu} onCloseMenu={closeMobileMenu} />

            <section className="auth-section">
                <div className="auth-container">
                    <div className="auth-card">
                        <div className="auth-header">
                            <h2>Member Login</h2>
                            <p>Welcome back to PETSUDUR community</p>
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
                                <label htmlFor="password">Password</label>
                                <input 
                                    type="password" 
                                    id="password" 
                                    name="password" 
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required 
                                    placeholder="Enter your password"
                                />
                            </div>

                            <div className="form-options">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    <span>Remember me</span>
                                </label>
                                <a href="#forgot" className="forgot-password">
                                    Forgot password?
                                </a>
                            </div>

                            <button type="submit" className="auth-btn">
                                Login
                            </button>
                        </form>

                        <div className="auth-footer">
                            <p>
                                <span>Don't have an account?</span>
                                <Link to="/signup"> Sign up here</Link>
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

export default Login;