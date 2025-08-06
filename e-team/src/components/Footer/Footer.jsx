// components/Footer.jsx
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <h2 className="logo-text">E-Team</h2>
                    <p className="slogan">Care That Shows</p>
                </div>
                <div className="footer-links">
                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/quote">Request Quote</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li><Link to="/terms">Terms of Service</Link></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/corporate-policy">Corporate Policy</Link></li>
                            <li><Link to="/conditions">Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} E-Team Maintenance. All rights reserved.</p>
            </div>
        </footer>
    );
}
