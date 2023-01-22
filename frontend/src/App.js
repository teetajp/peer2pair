import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Community from './components/Community';


function App() {
  return (
    <div>
      <h1>Communities</h1>
      <Community/>
    </div>
  )
}

export default App;
