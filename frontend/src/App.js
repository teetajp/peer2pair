import logo from './logo.svg';
import './App.css';

import * as React from 'react';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Community from './components/Community';
import Theme from './components/Theme.js';
import { useTheme } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/"></Route>
    </Routes>
  </BrowserRouter>
}



function DeepChild() {
  const theme = useTheme();
  return <span>{`spacing ${theme.spacing}`}</span>;
}


function App() {
  return (
    <ThemeProvider theme={Theme}>

      <h1>Communities</h1>
      <Community/>

      {/* <AppRoutes /> */}

      </ThemeProvider>
  )
}

export default App;
