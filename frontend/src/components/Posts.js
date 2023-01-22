import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import './Posts.css';

const Post = (props) => {
    return(
        <div id="each-post">
            <label>{props.post.author}</label>
            <br />
            <p>{props.post.text}</p>
            <Button>Comment</Button>
        </div>
    )
}

const Posts = (props) => {
    return(
        <React.Fragment>
            <ul>
                {props.posts.map(post => 
                    <Post key={props.posts.indexOf(post)} post={post} />)}
            </ul>
        </React.Fragment>
    )
}

export default Posts;