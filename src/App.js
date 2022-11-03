import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";
//
import { useState } from "react";
//
import videos from "./data/video-details.json";
import getVideoDetails from "./utilities/ulils";
import VideoList from "./components/VideoList/VideoList";
import { getVideos } from "./utilities/ulils";

function App() {
  const [currentId, setCurrentId] = useState(videos[0].id);
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(currentId));
  return (
    <div className="App">
      <Header />
      <Video />
      <Main video={videoDetails} />
      <VideoList videos={getVideos(currentId)} />
    </div>
  );
}

export default App;
