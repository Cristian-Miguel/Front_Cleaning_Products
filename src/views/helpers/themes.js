import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#dff8f6',
      main: '#65727a',
      dark: '#96acaa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#d7f0d9',
      main: '#CEEDD0',
      dark: '#90a591',
      contrastText: '#000',
    },
    textfield: {
      main: '#ffff',
    },
  },
});

export default theme
