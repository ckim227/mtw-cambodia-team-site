import React from 'react';

const Section = ({ id, titleEn, titleKm, textEn, textKm, imageSrc, language }) => {
  return (
    <section id={id} className='section'>
      <img className="section-image" src={imageSrc} alt={language === 'en' ? titleEn : titleKm} />
      <div className="section-content">
        <h2>{language === 'en' ? titleEn : titleKm}</h2>
        <p>{language === 'en' ? textEn : textKm}</p>
      </div>
    </section>
  );
};

export default Section;
