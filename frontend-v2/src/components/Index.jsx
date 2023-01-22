import { useState } from "react";
import peer2pairLogo from "../assets/peer2pair.svg";
import "../App.css";
import Button from "@mui/material/Button";


function Index() {
  return (
    <>
      <div>
        <a href="https://peer2pair.vercel.app" target="_blank">
          <img src="/peer2pair.svg" className="logo" alt="Peer2Pair logo" />
        </a>
      </div>
      <h1>My Communities</h1>
      <h2>
        A match-making platform for finding like-minded peers working towards
        the same goals.
      </h2>
      <div>
        <Button sx={{ marginX: "1rem" }} variant="contained" size="medium">
          Login
        </Button>
        <Button sx={{ marginX: "1rem" }} variant="contained" size="medium">
          Sign Up
        </Button>
      </div>
      </>
  );
}

export default Index;
