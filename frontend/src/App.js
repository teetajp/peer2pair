import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CommunityFeed from './CommunityFeed.js';



function App() {
  return (

    <div>
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={}></Route>
        <Route path="/joincommunity" element={}></Route> 
        <Route path="login" element={<Login />}></Route>*/}
        <Route path="/communityfeed" element={<CommunityFeed />}></Route>
      </Routes >
      </BrowserRouter>
    </div>
  );
}

export default App;
