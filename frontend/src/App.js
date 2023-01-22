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
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import {Component} from "react"
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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('http://10.43.19.179:4000/communities')
    .then(res => res.json())
    .then(json => {
      this.setState ({
        isLoaded: true,
        items:json,
      })
    })
  }

render() {
  var { isLoaded, items } = this.state;

  if(!isLoaded) {
    return <p>Loading...</p>
  }
  else {
  return (
    <ThemeProvider theme={Theme}>
      <ul>
      {items.map(item => (
        <li key={item.name}>
          Name: {item.name}
        </li>
      ))}
      </ul>

      <h1>Communities</h1>
      <Community/>

      <AppRoutes />

      </ThemeProvider>
  )}
}
}

export default App;
