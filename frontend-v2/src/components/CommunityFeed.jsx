import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "react-router-dom";
import FormDialog from "./FormDialog";
import Posts from "./Posts";
import { Player } from '@livepeer/react';

function CommunityFeed(props) {
  const name = "Guitar";

  let posts = [

    {
      author: "Tatsuya",
      avatar: "T",
      text: "Check out my tunes!",
      photos: [],
      videos: "bafybeidunvwb2dlojud5acs726cfho4r6y6d3vvxhcvi22cnbsoc7m64m4",
      timestamp: "Sat 21/1/2023",
    },

    {
      author: "Leon",
      avatar: "L",
      text: "I wish I knew you wanted me~",
      photos: [],
      videos: "bafybeicfnan2sps6pwgzy352oif6zsdgubeg2pjxvluhtikfh3hds7ctfu",
      timestamp: "Sat 21/1/2023",
    },

    {
      author: "Stacey",
      avatar: "S",
      text: "#AdamLevigne",
      photos: [],
      videos: "bafybeib7vspt2zpqdh2tibxlxduo6bxdp5k25x36kz2b3la4fpyh4bx7cq",
      timestamp: "Sat 21/1/2023",
    },
    {
      author: "Maria",
      avatar: "M",
      text: "Fav ColdPlay song!",
      photos: [],
      videos: "bafybeibqhgjhqiyyuauolntc655xkl3bsmp232nkbpgr546rengrxpodhi",
      timestamp: "Sat 21/1/2023",
    },
    {
      author: "Tristan",
      avatar: "T",
      text: "Counting money not stars!",
      photos: [],
      videos: "bafybeidiobvq4gtjeep2tu5ajylgxlxbqy5z7bssxajddwuszqajka4l2i",
      timestamp: "Sat 21/1/2023",
    },
    {
      author: "Ranjeet",
      avatar: "R",
      text: "Get groovy with me!",
      photos: [],
      videos: "bafybeiaczq5mzag7shzlj5z6s6yk2eh4tnpheup7racqkb55wxn4ij5p2q",
      timestamp: "Sat 21/1/2023",
    },
    {
      author: "Kim",
      avatar: "K",
      text: "Check out my pop riff!",
      photos: [],
      videos: "bafybeigua6ffegzte5d4vhkvoi57l5zjeytyhc252dg6jssianwtzdmpie",
      timestamp: "Sat 21/1/2023",
    },
    {
      author: "John",
      avatar: "J",
      text: "Can't go wrong with the classics!",
      photos: [],
      videos: "bafybeibeis3cm7ligy5czesew5hs2kms6c72x5lln2wtm465w2quchpq54",
      timestamp: "Sat 21/1/2023",
    },
  ];
  console.log("Reach the community feed");

  return (
    <div >
      <AppBar position="static" sx={{alignItems: "center", justifyContent:'space-between',
    paddingY:"4px"}}>
        <Toolbar sx={{height:'50px', alignItems:'center', justifyContent:'center', flexGrow:'1',
      padding:'0 20px'}}>
          <Link to="/index">
            <Button
              color="secondary"
              variant="contained"
              style={{ textDecoration: "none" }} size="small"
            >
              {" "}
              Communities{" "}
            </Button>
          </Link>
          <h1 style={{margin:'0 15px', fontSize:"32px"}}>{name}</h1>
          <FormDialog posts={posts} />
        </Toolbar>
      </AppBar>
      <Posts posts={posts} />
    </div>
  );
}

export default CommunityFeed;
