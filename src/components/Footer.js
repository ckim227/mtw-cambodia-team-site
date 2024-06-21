import React from 'react';

const Footer = ({ language }) => {
  return (
    <footer className='footer'>
      <div className="footer-info">
        <p>{language === 'en' ? '2024 Non-Profit Organization. All rights reserved.' : '2024 អង្គការ​មិន​មែន​ជា​កម្រៃ. រក្សា​សិទ្ធ​គ្រប់យ៉ាង.'}</p>
      </div>
    </footer>
  );
};

export default Footer;
