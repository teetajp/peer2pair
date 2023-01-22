import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Index from "./components/Index";
import CommunityFeed from "./components/CommunityFeed";
import { ThemeProvider, createTheme, useTheme } from "@mui/material/styles";
import Theme from "./components/Theme";

function App() {
{/* const provider = useLivepeerProvider(); */}
  return (
    <div className="App">
      {/* <h1>Hello Peer2Pair = {provider.getConfig().name}</h1> */}
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/index" element={<Index />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/feed" element={<CommunityFeed />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
