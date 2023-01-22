import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#FD3A73',
    },
    secondary: {
      main: '#424242',
    },
    background: {
      default: '#f2ffd7',
    },
    text: {
      primary: 'rgba(41,40,40,0.87)',
      secondary: 'rgba(41,40,40,0.87)',
    },
  },
});

export default Theme;