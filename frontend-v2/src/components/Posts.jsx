import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import React from "react";
import { Player } from "@livepeer/react";

const Post = (props) => {
  const playBackId = props.post.videos;
  return (
    <Paper
      sx={{
        width: "100%",
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
      }}
      
    >
      <div style={{ margin: "15px 20px" }}>
        <div
          style={{
            display: "flex",
            gap: "15px",
            alignItems: "center",
            marginBottom:'5px',
            fontWeight:'bold'
          }}
        >
          <Avatar
            style={{ display: "inline-block" }}
            sx={{ bgcolor: "primary" }}
            src="../src/assets/thug_pear.png"
          />
          {props.post.author}
          <p style={{ marginLeft: "auto", fontSize: "12px", color: "grey" }}>
            {props.post.timestamp}
          </p>
        </div>

        <Player
            title="Waterfalls"
            playbackId={playBackId}
            showPipButton
            showTitle={false}
            aspectRatio="16to9"
            controls={{
              autohide: 3000,
            }}
            theme={{
              borderStyles: { containerBorderStyle: "hidden" },
              radii: { containerBorderRadius: "10px" },
            }}
          />

        <p style={{ marginBottom: "10px" }}>{props.post.text}</p>
        {/* <Button variant="text"
                    sx={{ padding: '2px' }}>Comment</Button> */}
      </div>
    </Paper>
  );
};

const Posts = (props) => {
  return (
    <React.Fragment>
      <ul style={{width:'100%', margin:'0 auto', padding:'0'}}>
        {props.posts.map((post) => (
          <Post key={props.posts.indexOf(post)} post={post} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Posts;
