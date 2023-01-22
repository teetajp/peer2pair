import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import './Posts.css';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';


const Post = (props) => {
    return (
        <Paper
            sx={{
                width: '70%',
                margin: '30px auto',
                display: 'flex',
                flexDirection: 'column'
            }}>
            <div style={{ margin: '15px 20px' }}>
                <div style={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                }}>
                    <Avatar style={{ display: 'inline-block' }} sx={{ bgcolor: 'primary' }}>
                        {props.post.avatar}</Avatar>
                    {props.post.author}
                    <p style={{marginLeft:'auto', fontSize:'12px', color:'grey'}}>
                        {props.post.timestamp}</p>
                </div>
                <p style={{marginBottom:'10px'}}>{props.post.text}</p>
                {/* <Button variant="text"
                    sx={{ padding: '2px' }}>Comment</Button> */}
            </div>
        </Paper>
    )
}

const Posts = (props) => {
    return (
        <React.Fragment>
            <ul>
                {props.posts.map(post =>
                    <Post key={props.posts.indexOf(post)} post={post} />)}
            </ul>
        </React.Fragment>
    )
}

export default Posts;