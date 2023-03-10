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
import { useCreateAsset, useLivepeerProvider } from "@livepeer/react";

function FormDialog(props) {
    const provider = useLivepeerProvider();

  const handleClickOpen = () => {
    setOpen(true);
  };

    const {
        mutate: createAsset,
        data: assets,
        status,
        progress,
        error,
      } = useCreateAsset(
        // we use a `const` assertion here to provide better Typescript types
        // for the returned data
        video
          ? {
              sources: [{ name: video.name, file: video }]
            }
          : null,
      );

    const handleClose = () => {
        setOpen(false);
    }

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

    const uploadVideo = () => {
        handleClose();
    }

    return (
        <React.Fragment>
            <Button color="secondary" variant="contained" onClick={handleClickOpen}>Daily Checkin</Button>
            <Dialog open={open} onClose={handleClose}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <DialogTitle>Daily Checkin!</DialogTitle>
                    <DialogContent>
                        <DialogContentText>What do you want to update today?</DialogContentText>
                        <TextField autoFocus multiline varian="standard" fullWidth onChange={(e) => setPostText(e.target.value)}></TextField>
                        <input 
                        type={"file"}
                        onChange={(e) => {
                            setVideo(e.target.files[0]);
                        }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button disabled = {!video} onClick={uploadVideo}> Upload Video </Button>
                        {assets?.map((asset) => (
                            <div key={asset.id}>
                                <div>
                                    <div>Asset Name: {asset?.name}</div>
                                    <div>Playback URL: {asset?.playbackUrl}</div>
                                    <div>IPFS CID: {asset?.storage?.ipfs?.cid ?? 'None'}</div>
                                </div>
                            </div>
                         ))}
                        {error && <div>{error.message}</div>}
                        <Button variant="contained" onClick={postCheckin}
                            style={{ width: '100px', marginBottom:'5px' }}>Post</Button>
                    </DialogActions> </div>
            </Dialog>
         </React.Fragment>
    )
}

export default FormDialog;
