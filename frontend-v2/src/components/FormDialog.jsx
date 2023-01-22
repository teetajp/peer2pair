import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import axios from "axios";

function FormDialog(props) {
  const [open, setOpen] = useState(false);
  const [postText, setPostText] = useState("");
  const [video, setVideo] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const postCheckin = () => {
    console.log(postText);
    let post = {
      // author_id: ,
      // text: { postText },
      // photos: [],
      // videos: video,
      // timestamp: "Sat 21/1/2023"
      title: "Title",
      content: postText,
    };

    let author_id = 1;
    let group_id = 1;
    axios
      .post(`http://localhost:4000/posts/${author_id}/${group_id}`, post)
      .then((response) => {
        console.log(response);
      });

    //props.posts.push(post);
    handleClose();
  };

  return (
    <React.Fragment>
      <Button color="secondary" variant="contained" onClick={handleClickOpen}>
        Daily Checkin
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <DialogTitle>Daily Checkin!</DialogTitle>
          <DialogContent>
            <DialogContentText>
              What do you want to update today?
            </DialogContentText>
            <TextField
              autoFocus
              multiline
              varian="standard"
              fullWidth
              onChange={(e) => setPostText(e.target.value)}
            ></TextField>
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              onClick={postCheckin}
              style={{ width: "100px", marginBottom: "5px" }}
            >
              Post
            </Button>
          </DialogActions>{" "}
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default FormDialog;
