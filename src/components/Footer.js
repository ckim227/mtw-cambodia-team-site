import React from 'react';

const Footer = ({ language }) => {
  return (
    <footer className='footer'>
      <div className="footer-info">
        <p>{language === 'en' ? 'Sample Footer Text' : 'អត្ថបទបាតកថាគំរូ'}</p>
      </div>
      <div className="social-links">
        {/* Add links below */}
        <a href="#" className="social-link">Facebook</a>
        <a href="#" className="social-link">Telegram</a>
        <a href="#" className="social-link">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
