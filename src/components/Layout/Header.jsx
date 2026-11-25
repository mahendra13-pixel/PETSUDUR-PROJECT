import React from 'react';

const Header = ({ user }) => {
    return (
        <header>
            <div className="top-bar">
                <div className="container">
                    <div className="logo">
                        <h1>PETSUDUR</h1>
                        <p>Vaccinate, Sterilize & Care</p>
                        <p className="hero-description"></p>
                    </div>
                    <div className="contact-info">
                        <span>📧 info@petsudur.org</span>
                        <span>📞 +977-984-XXXXXXX</span>
                        {user ? (
                            <div className="user-menu">
                                <span>Welcome, {user.first_name}!</span>
                                <button className="logout-btn" onClick={() => window.location.href = '/logout/'}>🚪 Logout</button>
                                <button className="dashboard-btn" onClick={() => window.location.href = '/dashboard/'}>📊 Dashboard</button>
                            </div>
                        ) : (
                            <div className="auth-buttons">
                                <button className="login-btn" onClick={() => window.location.href = '/login/'}>👤 Login</button>
                                <button className="signup-btn" onClick={() => window.location.href = '/signup/'}>📝 Signup</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;