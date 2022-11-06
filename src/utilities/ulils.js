import videoDetails from "../data/video-details.json";
import videos from "../data/videos.json";

const getVideoDetails = (videoId) => {
  return videoDetails.find((video) => video.id === videoId);
};

export const timestampConvert = (stamp) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  let s = new Date(stamp).toLocaleDateString("en-US", options);
  return s;
};

export const getVideos = (videoId) => {
  return videos.filter((element) => element.id !== videoId);
};

export default getVideoDetails;
