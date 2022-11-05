import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";
//
import { useState } from "react";
//
import videoArr from "./data/video-details.json";
import getVideoDetails from "./utilities/ulils";
import VideoList from "./components/VideoList/VideoList";
import { getVideos } from "./utilities/ulils";

const apiKey = "dc0900dd-0f3b-4b59-a50b-938cbd326362";

function App() {
  const [currentId, setCurrentId] = useState(videoArr[0].id);
  const [videos, setVideos] = useState(getVideos(currentId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(currentId));

  const clickHandler = (event, clickedId) => {
    console.log(event, clickedId);
    event.preventDefault();
    setCurrentId(clickedId);
    setVideos(getVideos(clickedId));
    setVideoDetails(getVideoDetails(clickedId));
  };

  return (
    <div className="App">
      <Header />
      <Video video={videoDetails} apiKey={apiKey} />
      <div className="bottomSection">
        <div className="bottomSection__main">
          <Main video={videoDetails} />
        </div>
        <div className="bottomSection__videos">
          <VideoList videoList={videos} onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;
