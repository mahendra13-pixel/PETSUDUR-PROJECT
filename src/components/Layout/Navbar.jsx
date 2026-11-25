import React from 'react';
import { Link } from 'react-router-dom'; // ← Add this import

const Navbar = ({ user, onToggleMenu, onCloseMenu }) => {
    return (
        <nav className="navbar">
            <div className="container">
                {/* Hamburger Menu Button */}
                <div className="hamburger-menu" id="hamburgerMenu" onClick={onToggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                
                {/* Navigation Links */}
                <div className="nav-links" id="navLinks">
                    <Link to="/" onClick={onCloseMenu}>HOME</Link>
                    <Link to="/about" onClick={onCloseMenu}>ABOUT</Link>
                    <Link to="/services" onClick={onCloseMenu}>SERVICES</Link>
                    <Link to="/help" onClick={onCloseMenu}>HELP US</Link>
                    <Link to="/contact" onClick={onCloseMenu}>CONTACT</Link> {/* ← Update this line */}
                    {user && (
                        <Link to="/dashboard" onClick={onCloseMenu}>DASHBOARD</Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;