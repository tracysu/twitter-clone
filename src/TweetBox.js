import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

/*input function and below that, users can drop an image*/ 
function TweetBox() {
  return (
    <div className='tweetBox'>
        <div className='tweetBox__input'>
            <Avatar src=
            "https://e1.pxfuel.com/desktop-wallpaper/399/852/desktop-wallpaper-aesthetic-pfp-cartoon-pfp.jpg"
            />
            <input placeholder="What's happening?" type='text'/>
            <input placeholder="Enter image URL" type='text'/>
        </div>
        <Button>Tweet</Button>
    </div>
  )
}

export default TweetBox