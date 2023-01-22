import { useState } from "react";
import peer2pairLogo from "../assets/peer2pair.svg";
import "../App.css";
import Button from "@mui/material/Button";
import Community from "./Community"
import CommunityFeed from "./CommunityFeed"
import FormDialog from "./FormDialog"

function Index() {
  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img src="/peer2pair.svg" className="logo" alt="Peer2Pair logo" />
        </a>
      </div>
      <h1>My Communities</h1>
      <div>
        <Community />
        {/* <CommunityFeed/> */}
      </div>
    </>
  );
}

export default Index;
