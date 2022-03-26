import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode:"light",
    primary: {
      light: '#080808',
      main: '#080808',
      dark: "#080808",
      contrastText: '#FFFFFF',
    },
    
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Roboto Mono',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    
  }
});

export default theme;