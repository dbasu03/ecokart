import React from 'react';
import './Footer.css';
import insta from '../Assets/insta.png';
import fb from '../Assets/fb.png';
import email from '../Assets/email.png';
import logo2 from '../Assets/logo4.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer"></div>
        <div className="footer-logo">
            <img src={logo2} alt="" />
            {/*<p>Karvat</p>*/}
        </div>
        <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
        </ul>
        <p>Contact us on +91 9038769430</p>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta} alt="Instagram" class="icon" onclick="location.href='//https://instagram.com/'" />
            </div>
            <div className="footer-icons-container">
                <img src={fb} alt="" />
            </div>
            <div className="footer-icons-container">
                <img src={email} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 - All Rights Reserved</p>
        </div>
        </div>
  );
};

export default Footer;
