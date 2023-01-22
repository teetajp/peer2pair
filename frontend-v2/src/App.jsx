import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Index from "./components/Index";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Theme from './components/Theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/index" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
