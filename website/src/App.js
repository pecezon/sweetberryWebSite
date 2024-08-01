import { useTranslation } from 'react-i18next';
import { Box, useMediaQuery } from '@mui/material';
import Nav from './components/Nav';
import { useState } from 'react';
import MainAnnouncement from './components/MainAnnouncement';
import Qualities from './components/Qualities';
import OpeningHours from './components/OpeningHours';
import Flavors from './components/Flavors';
import Toppings from './components/Toppings';

function App() {
  const mediaQuery = useMediaQuery('(min-width:1000px)')

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Language changed to: ', i18n.language);
  };

  const [links, setLinks] = useState({
    home: {
      href: '/',
      nameRef: 'Home'
    },
    flavors: {
      href: '/flavors',
      nameRef: 'Flavors'
    },
    reviews: {
      href: '/reviews',
      nameRef: 'Reviews'
    },
    
  });

  console.log(links["home"]["nameRef"]);

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        padding: '0',
        width: '100%',
      }}
    >
      <Nav mediaQuery={mediaQuery} language={i18n.language} changeLanguage={changeLanguage} links={links} t={t}/>
      <MainAnnouncement mediaQuery={mediaQuery} t={t}></MainAnnouncement>
      <Qualities mediaQuery={mediaQuery} t={t}></Qualities>
      <OpeningHours mediaQuery={mediaQuery} t={t}></OpeningHours>
      <Flavors mediaQuery={mediaQuery} t={t}></Flavors>
      <Toppings mediaQuery={mediaQuery}></Toppings>
      
      

      <div className="App">
        <header className="App-header">
          <h1>{t('welcome')}</h1>
          <p>{t('description')}</p>
        </header>
      </div>
    </Box>

    
  );
}

export default App;
