import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E31E26', // Rouge principal de vos maquettes
      contrastText: '#fff',
    },
    secondary: {
      main: '#292929', // Gris foncé utilisé pour les textes
    },
    background: {
      default: '#f8f9fa', // Couleur de fond légère
      paper: '#fff',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 5,
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;