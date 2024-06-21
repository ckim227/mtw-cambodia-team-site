import React from 'react';

const ContactForm = ({ language }) => {
  return (
    <section id="contact" className='contact-form'>
      <div id="contact-form-wrapper">
        <form id="contact-form">
          <h2>{language === 'en' ? 'Contact Us' : 'ទំនាក់ទំនង​មក​ពួក​យើង'}</h2>
          <label htmlFor="name">{language === 'en' ? 'Name' : 'ឈ្មោះ'}</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">{language === 'en' ? 'Email' : 'អ៊ីមែល'}</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">{language === 'en' ? 'Message' : 'សារ'}</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">{language === 'en' ? 'Submit' : 'បញ្ជូន'}</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
