import React, { useEffect, useState } from 'react';
import Video from './Components/Video/Video'
import './App.css';
import db from './firebase';

function App() {
  const [videos,setVideos]=useState([])
  useEffect(() => {
    const unsubrscribe= db.collection('videos').onSnapshot(snap=>(
      setVideos(snap.docs.map(doc=>doc.data()))
    ))
    return () => {
      unsubrscribe()
    }
  }, [])
  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, likes, shares, messages, song }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              shares={shares}
              likes={likes}
              messages={messages}
              song={song}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
