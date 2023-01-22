import './App.css';
import Button from '@mui/material/Button';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import Community from './components/Community';
import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import Header from "./components/Header";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
// import Portfolio from "./Components/Portfolio";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {Routes, Route, Link} from "react-router-dom";

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/communities" element={<Community />}></Route>
    </Routes>
    )
 
}

class App extends Component {

  componentDidMount() {
    this.getResumeData();
  }

  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Routes>
          <Route path = "/" element = {<Header data={this.state.resumeData.main}></Header>}> </Route>
          <Route path = "/SignIn" element = {<SignIn></SignIn>}> </Route>
          <Route path = "/SignUp" element = {<SignUp></SignUp>}> </Route>
        </Routes>

       {/*  <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} /> */}
      </div>
    );
  }
}

export default App;
