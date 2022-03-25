import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode:"light",
    primary: {
      light: '#0f0b28',
      main: '#0f0b28',
      dark: "#4856E8",
      contrastText: '#FFFFFF',
    },
    
  },
});

export default theme;