import { useTranslation } from 'react-i18next';
import { Box, useMediaQuery } from '@mui/material';
import Nav from './components/Nav';
import { useState, useRef } from 'react';
import MainAnnouncement from './components/MainAnnouncement';
import Qualities from './components/Qualities';
import OpeningHours from './components/OpeningHours';
import Flavors from './components/Flavors';
import Toppings from './components/Toppings';
import CustomerReview from './components/CustomerReview';
import Footer from './components/Footer';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./utils/themes";

function App() {
  const mediaQuery = useMediaQuery('(min-width:1000px)')

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    console.log('Language changed to: ', i18n.language);
  };

  const homeRef = useRef(null);
  const flavorsRef = useRef(null);
  const reviewsRef = useRef(null);
  const toppingsRef = useRef(null);

  const [links, setLinks] = useState({
    home: {
      href: homeRef,
      nameRef: 'Home'
    },
    flavors: {
      href: flavorsRef,
      nameRef: 'Flavors'
    },
    reviews: {
      href: reviewsRef,
      nameRef: 'Reviews'
    },
    toppings: {
      href: toppingsRef,
      nameRef: 'Toppings'
    },
  });

  return (
    <ThemeProvider theme={theme}>
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0',
        padding: '0',
        width: '100%',
      }}
      ref={homeRef}
    >
      <Nav mediaQuery={mediaQuery} language={i18n.language} changeLanguage={changeLanguage} links={links} t={t}/>
      <MainAnnouncement mediaQuery={mediaQuery} t={t} flavorsRef={flavorsRef}></MainAnnouncement>
      <Qualities mediaQuery={mediaQuery} t={t} ></Qualities>
      <OpeningHours mediaQuery={mediaQuery} t={t}></OpeningHours>
      <Flavors mediaQuery={mediaQuery} t={t} ref={flavorsRef}></Flavors>
      <Toppings mediaQuery={mediaQuery} t={t} ref={toppingsRef}></Toppings>
      <CustomerReview mediaQuery={mediaQuery} language={i18n.language} t={t} ref={reviewsRef}></CustomerReview>
      <Footer mediaQuery={mediaQuery} t={t} links={links}></Footer>
      

      
    </Box>
    </ThemeProvider>
    
  );
}

export default App;
