import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Video from './Video';

function App() {
  const [videos,setVideos]=useState([])

  useEffect(()=>{
    async function fetchData(){
      const res=await axios.get("http://localhost:9000/v2/posts")
      setVideos(res.data)
    }
    fetchData()
  },[])
  return (
    <div className="app">
      <div className='app__videos'>
        {videos.map(({url,channel,description,song,likes,shares,messages})=>
        (
          <Video
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          shares={shares}
          messages={messages}/>
        ))}
        {/* <Video
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169738/video1_cvrjfm.mp4"
        channel="mahesh"
        description="its my windows"
        song="song"
        likes={239}
        shares={345}
        messages={890}/>
        <Video
        url="https://res.cloudinary.com/dxkxvfo2o/video/upload/v1608169739/video2_mecbdo.mp4"
        channel="tharun"
        description="its his windows"
        song="song22"
        likes={290}
        shares={905}
        messages={690}/> */}
      </div>
    </div>
  );
}

export default App;
