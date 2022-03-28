import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode:"light",
    primary: {
      light: '#FFFFFF',
      main: '#FFFFFF',
      dark: "#080808",
      contrastText: '#6B6B6B',
    },
    navlinkSelected:"#060047",
    navlinkUnSelected:"#808791",
  }
});

export default theme;