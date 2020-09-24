import React, { useRef, useState } from 'react'
import './Video.css'
import video1 from '../../Videos/video1.mp4'
import VideoFooter from './VideoFooter/VideoFooter'
import VideoSidebar from './VideoSidebar/VideoSidebar'

function Video({ url,channel, description, song, likes, shares, messages }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="video__player"
        loop
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video