import React from 'react';
import linkedinLogo from './linkedin.png';
import instagramLogo from './instagram.png';
import mailLogo from './gmail.png';
const Footer = () => {
  return (
    <footer>
      <div className="footer-container" style={{ backgroundColor: '#f2f2f2', padding: '20px', textAlign: 'center' }}>
        <div className="social-icons" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <a href="https://www.linkedin.com/in/ravi-kanth-9442661bb/" rel="noopener noreferrer" style={{ margin: '0 10px', transition: 'opacity 0.3s ease' }}>
            <img src={linkedinLogo} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="https://www.instagram.com/_fan_of_srh_/" rel="noopener noreferrer" style={{ margin: '0 10px', transition: 'opacity 0.3s ease' }}>
            <img src={instagramLogo} alt="Instagram" style={{ width: '30px', height: '30px' }} />
          </a>
          <a href="mailto:ravikanth.karlapati31@gmail.com" style={{ margin: '0 10px', transition: 'opacity 0.3s ease' }}>
            <img src={mailLogo} alt="Email" style={{ width: '30px', height: '30px' }} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
