import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";
//
import { useState, useEffect } from "react";
import axios from "axios";
//
import videoArr from "./data/video-details.json";
import getVideoDetails from "./utilities/ulils";
import VideoList from "./components/VideoList/VideoList";
import { getVideos } from "./utilities/ulils";

const apiKey = "dc0900dd-0f3b-4b59-a50b-938cbd326362";

export const videosData = () => {
  // useEffect(() => {
  axios
    .get(`https://project-2-api.herokuapp.com/videos?api_key=${apiKey}`)
    .then((response) => {
      const data = response.data;
      console.log(data, 'data');
    })
    .catch((error) => error);
      // }, []);
};


function App() {
  const [currentId, setCurrentId] = useState(videoArr[0].id);
  const [videos, setVideos] = useState(getVideos(currentId));
  const [videoDetails, setVideoDetails] = useState(getVideoDetails(currentId));

  useEffect(() => {
    console.log(videosData(), "111");
    setCurrentId(currentId);
    setVideos(getVideos(currentId));
    setVideoDetails(getVideoDetails(currentId));
  }, [currentId]);

  // const clickHandler = (event, clickedId) => {
  //   console.log(event, clickedId);
  //   event.preventDefault();
  // };

  return (
    <div className="App">
      <Header />
      <Video video={videoDetails} apiKey={apiKey} />
      <div className="bottomSection">
        <div className="bottomSection__main">
          <Main video={videoDetails} />
        </div>
        <div className="bottomSection__videos">
          <VideoList
            videoList={videos}
            setId={setCurrentId}
           />
        </div>
      </div>
    </div>
  );
}

export default App;
