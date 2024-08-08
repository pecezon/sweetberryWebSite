import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    special: {
      fontSize: '3rem',
      fontWeight: 500,
      fontFamily: 'Italiana, sans-serif',
    },
    specialPhone: {
      fontSize: '2rem',
      fontWeight: 500,
      fontFamily: 'Italiana, sans-serif',
    },
    h1: {
      fontSize: '20rem',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '2rem',
      fontWeight: 400,
    },
    h2P: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.75rem',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.5rem',
      fontWeight: 300,
    },
    h3P: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1.25rem',
      fontWeight: 300,
    },
    body1P: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
      fontWeight: 300,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 450,
    },
    body2P: {
      fontSize: '0.825rem',
      fontWeight: 450,
    },

  },
});

export default theme;
