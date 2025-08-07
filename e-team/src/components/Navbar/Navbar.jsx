import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false); // закрытие при клике на ссылку

    return (
        <nav className="navbar">
            <div className="navbar-logo"><Link to="/" onClick={closeMenu}>ETeam</Link></div>

            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
                    <li><Link to="/benefits" onClick={closeMenu}>Benefits</Link></li>
                    <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                </ul>
            </div>

            <div className="burger" onClick={toggleMenu}>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
                <div className={`bar ${isOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
}
