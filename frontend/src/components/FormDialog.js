import { DialogContentText, DialogTitle, TextField, Toolbar, Typography, Dialog, DialogContent, DialogActions } from "@mui/material";
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import Posts from "./Posts";

export function FormDialog(props) {

    const [open, setOpen] = useState(false);
    const [postText, setPostText] = useState("");
    const [video, setVideo] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    const postCheckin = () => {
        let post = {
            author: "current user",
            text: {postText},
            photos: [],
            videos: video,
            timestamp: "Sat 21/1/2023"
        }

        props.posts.push(post);
        handleClose();
    }

    return (
        <React.Fragment>
        <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Daily Checkin</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Daily Checkin!</DialogTitle>
                    <DialogContent>
                            <DialogContentText>What do you want to update today?</DialogContentText>
                            <TextField autoFocus multiline varian="standard" fullWidth onChange={(e) => setPostText(e.target.value)}></TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={postCheckin}>Post</Button>
                    </DialogActions>
            </Dialog> 
        </React.Fragment>
    )
}