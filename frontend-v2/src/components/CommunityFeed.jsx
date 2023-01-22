import { Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";
import { Link } from "react-router-dom";
import FormDialog from "./FormDialog";
import Posts from "./Posts";
//import HomeIcon from "./components/HomeIcon.js";

function CommunityFeed(props) {
  const name = "Guitar";
  // let streak = 0;
  let posts = [
    {
      author: "Henry",
      avatar: "H",
      text: "Today is a nice day",
      photos: [],
      videos: "",
      timestamp: "Sat 21/1/2023",
    },

    {
      author: "Tom",
      avatar: "T",
      text: "Today is not a nice day",
      photos: [],
      videos: "",
      timestamp: "Sat 21/1/2023",
    },
    
  ];
  console.log("Reach the community feed");

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button
              color="secondary"
              variant="contained"
              style={{ textDecoration: "none" }}
            >
              {" "}
              Community{" "}
            </Button>
          </Link>
          <h1>{name}</h1>
          <FormDialog posts={posts} />
        </Toolbar>
      </AppBar>

      <Posts posts={posts} />
    </Container>
  );
}

export default CommunityFeed;
