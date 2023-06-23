import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";

function Feed() {
  return (
    <div>
        {/* Header */}
        <div className="feed__header">
            <h2> Feed</h2>
        </div>

        {/* TweetBox */}
        <TweetBox />

 
        {/* Posts Below */}
    </div>
  );
}

export default Feed