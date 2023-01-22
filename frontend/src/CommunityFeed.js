import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import { DialogContentText, DialogTitle, TextField, Toolbar, Typography, Dialog, DialogContent, DialogActions } from "@mui/material";
import Button from '@mui/material/Button';
import Posts from './components/Posts.js';
import { Link } from 'react-router-dom';
import { FormDialog } from "./components/FormDialog.js";
//import HomeIcon from "./components/HomeIcon.js";


function CommunityFeed(props) {
    const name = "Group Name";
    let streak = 0;
    let posts = [
        {
            author: 'Henry',
            text: 'Today is a nice day',
            photos: [],
            videos: "",
            timestamp: "Sat 21/1/2023"
        },

        {
            author: 'Tom',
            text: 'Today is not a nice day',
            photos: [],
            videos: "",
            timestamp: "Sat 21/1/2023"
        }
    ]
    console.log("Reach the community feed");

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/"><Button color="inherit"> Community </Button></Link>
                    <Button color='inherit'>
                        {name}
                    </Button>
                    <Typography component="div" sx={{ flexGrow: 1}}>
                        {streak}
                    </Typography>
                    <FormDialog posts ={posts} />            
                    </Toolbar>
            </AppBar>

            <Posts posts={posts} />
        </div>
    )
}

export default CommunityFeed;