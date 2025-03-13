import React from 'react';
import config from './config.js';

function Footer() {
  return (
    <div className="banner-bot">
      <div className="footer-section">
        <h2 className="footer">
          Ronyas Restaurang
        </h2>
        <h3 className="footer">
          Skolgatan 65F
        </h3>
        <h3 className="footer">
          Vasaplan Umeå
        </h3>
      </div>
      <div className="footer-section">
        <h2 className="footer">
          Kontakta oss
        </h2>
        <h3 className="footer">
          Telefon: 090 - 12 99 12
        </h3>
      </div>
      <div className="footer-section">
        <h4 className="footer">
          ©2025 Ronyas Restaurang
        </h4>
      </div>
      <div className="footer-section">
        <a href="https://github.com/samosk/React" target="_blank" rel='noreferrer'>
          <img src={`${config.assetPath}/github-mark-white.png`} alt="GitHub Logga" className="github-logo" />
        </a>
      </div>
    </div>
  );
}

export default Footer;