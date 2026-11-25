import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <div className="footer-logo">
                        <h1 style={{color: '#ffffff', fontSize: '32px'}}>
                            <span style={{color: '#fd0808', fontWeight: 'bold'}}>PETSUDUR</span>
                        </h1>
                        <p style={{color: '#fd0808'}}>Vaccinate, Sterilize & Care</p>
                    </div>
                    <p>📍 Achham, Nepal</p>
                    <p>📞 +977-9848444014</p>
                    <p>📧 info@petsudur.org</p>
                </div>

                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="#gallery">Image Gallery</a></li>
                        <li><a href="#help">Help Us</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Policy</h3>
                    <ul>
                        <li><a href="#">Terms & Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Suggestions</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Join Our Newsletter</h3>
                    <p>Stay updated with our latest programs & updates.</p>
                    <form className="newsletter">
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    Copyright © 2025 <span className="footer-brand" style={{color: '#fd0808'}}>PETSUDUR</span>. All Rights Reserved.
                    <br />Designed & Developed by <strong>Mahendra Kunwar</strong>
                    <br />founded by <strong>Mahendra Kunwar</strong>
                    <br />co-founded by <strong>Manoj Kunwar</strong>
                </p>
            </div>
        </footer>
    );
};

export default Footer;