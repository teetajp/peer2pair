import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Community from './components/Community';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/communities" element={<Community />}></Route>
    </Routes>
    )
 
}


function App() {
  return (
    <div>

      <h1>Communities</h1>
      <Community/>

      <AppRoutes />

    </div>
  )
}

export default App;
