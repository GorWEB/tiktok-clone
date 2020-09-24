import React, { useState } from 'react'
import "./VideoSidebar.css"
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import ShareIcon from "@material-ui/icons/Share"
import ChatIcon from "@material-ui/icons/Chat"
import { IconButton } from "@material-ui/core";


function VideoSidebar({likes,shares,messages}) {
    const [liked,setLiked]=useState(false)
    const handleLike=(e)=>{
        if(liked){
            setLiked(false)
        }else{
            setLiked(true)
        }
    }
    return (
      <div className="sidebar">
        <div className="sidebar__icons">
          {liked ? (
            <FavoriteIcon style={{color:'red'}} fontSize="large" onClick={handleLike} />
          ) : (
            <FavoriteBorderIcon fontSize="large" onClick={handleLike} />
          )}
          <p>{likes}</p>
          <ChatIcon fontSize="large" />
          <p>{messages}</p>
          <ShareIcon fontSize="large" />
          <p>{shares}</p>
        </div>
      </div>
    );
}

export default VideoSidebar
