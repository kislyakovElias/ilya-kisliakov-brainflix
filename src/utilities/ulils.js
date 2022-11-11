// import videoDetails from "../data/video-details.json";
// import videos from "../data/videos.json";
// import { useEffect } from "react";


  // useEffect(() => {
    
  //   const fetchVideoDetails = async () => {
  //     try {
  //       axios.get(`${url}/${currentId}?api_key=${apiKey}`).then((response) => {
  //         const data = response.data;
  //         setVideoDetails(data);
  //       });
  //     } catch (error) {
  //       console.log("Error", error);
  //     }
  //   };
  //   fetchVideoDetails();

  // }, []);

// const getVideoDetails = (videoId) => {
//   return videoDetails.find((video) => video.id === videoId);
// };

export const timestampConvert = (stamp) => {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  let s = new Date(stamp).toLocaleDateString("en-US", options);
  return s;
};

 export const filterVideo = (videos, videoId) => {
   return videos.filter((element) => element.id !== videoId);
 };

// export default getVideoDetails;
