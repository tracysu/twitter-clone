import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";

/*input function and below that, users can drop an image*/ 
function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
                <Avatar src=
                "https://e1.pxfuel.com/desktop-wallpaper/399/852/desktop-wallpaper-aesthetic-pfp-cartoon-pfp.jpg"
                />
                <input placeholder="What's happening?" type='text'/>
            </div>                
            <input className="tweetBox_imageInput" 
                placeholder=" Optional: Enter image URL" type='text'/>
            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  );
}

export default TweetBox