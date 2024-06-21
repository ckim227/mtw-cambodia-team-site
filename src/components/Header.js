import React from 'react';

//Change these to change text in header
const headerTitle_en = 'MTW Cambodia Team';
const headerTitle_kh = 'ក្រុម MTW កម្ពុជា។';
const languageButton_en = 'English';
const languageButton_kh = 'ខ្មែរ';


const Header = ({ setLanguage, language }) => {
  return (
    <header className='header'>
      <div className="language-toggle">
        <button onClick={() => setLanguage('en')}>{languageButton_en}</button>
        <button onClick={() => setLanguage('km')}>{languageButton_kh}</button>
      </div>
      <div>
      <h1 id="title" className='header-title'>
        {language === 'en' ? headerTitle_en : headerTitle_kh}
      </h1>
      </div>
    </header>
  );
};

export default Header;
