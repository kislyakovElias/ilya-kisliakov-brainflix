import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import Main from "./components/Main/Main";
//
import { useState, useEffect } from "react";
import axios from "axios";
//
// import getVideoDetails from "./utilities/ulils";
import VideoList from "./components/VideoList/VideoList";
import { filterVideo } from "./utilities/ulils";

const url = "https://project-2-api.herokuapp.com/videos";
const apiKey = "dc0900dd-0f3b-4b59-a50b-938cbd326362";

const defaultVideoId = "84e96018-4022-434e-80bf-000ce4cd12b8";

const defaultDetails = {
  id: "",
  title: "",
  channel: "",
  image: "",
  description: "",
  views: "",
  likes: "",
  duration: "",
  video: "",
  timestamp: 0,
  comments: [
    {
      id: "",
      name: "",
      comment: "",
      likes: 0,
      timestamp: 0,
    },
  ],
};

// export const videosData = () => {
// };

function App() {
  const [currentId, setCurrentId] = useState(defaultVideoId);
  const [videos, setVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(defaultDetails);
  // console.log(videoDetails, "getVidDet");

  useEffect(() => {
    axios
      .get(`${url}?api_key=${apiKey}`)
      .then((response) => {
        const data = response.data;
        console.log(data, "data");
        setVideos(filterVideo(data, currentId));
      })
      .catch((error) => error);
  }, [currentId]);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        axios.get(`${url}/${currentId}?api_key=${apiKey}`).then((response) => {
          const data = response.data;
          // console.log(data, "data");
          setVideoDetails(data);
        });
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchVideoDetails();
    // console.log(videosData(), "111");
    // setCurrentId(currentId);
    // setVideos(filter(videos, currentId));
  }, [currentId]);

  // const clickHandler = (event, clickedId) => {
  //   console.log(event, clickedId);
  //   event.preventDefault();
  // };

  return (
    <div className="App">
      <Header />
      
      {videoDetails.video? <Video video={videoDetails} apiKey={apiKey} /> : "Loading"}
      <div className="bottomSection">
        <div className="bottomSection__main">
          {videoDetails.comments[0].id && <Main video={videoDetails} />}
        </div>
        <div className="bottomSection__videos">
          <VideoList videoList={videos} setId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default App;
