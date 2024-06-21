import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import tuktuk from './images/tuktuk.jpg';
import busyCity from './images/busyCity.jpg';
import centralMarket from './images/centralMarket.jpg';
import monk from './images/monk.jpg'


const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <Header setLanguage={setLanguage} language={language} />
      <main>
        <Section
          id="about"
          titleEn="About Us"
          titleKm="អំពី​ពួក​យើង"
          textEn="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          textKm="អត្ថបទគំរូ"
          imageSrc={tuktuk}
          language={language}
        />
        <Section
          id="city-church-plants"
          titleEn="City Church Plants"
          titleKm="រុក្ខជាតិព្រះវិហារទីក្រុង"
          textEn="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          textKm="អត្ថបទគំរូ"
          imageSrc={busyCity}
          language={language}
        />
        <Section
          id="sample-project"
          titleEn="Sample Project"
          titleKm="គម្រោងគំរូ"
          textEn="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          textKm="អត្ថបទគំរូ"
          imageSrc={centralMarket}
          language={language}
        />
        <Section
          id="sample-project"
          titleEn="Sample Project"
          titleKm="គម្រោងគំរូ"
          textEn="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          textKm="អត្ថបទគំរូ"
          imageSrc={monk}
          language={language}
        />
        <ContactForm language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
};

export default App;
