import "./Main.scss";
import Comments from "../Comments/Comments";
import videos from "../../data/video-details.json";
import { useState, react } from "react";
// import getVideoDetails from "../../utilities/ulils";

function Main({ video }) {
  // const [currentId, setCurrentId] = useState(videos[0].id);
  // const [videoDetails, setVideoDetails] = useState(getVideoDetails(currentId));

  const {
    title,
    channel,
    description,
    views,
    likes,
    duration,
    timestamp,
    comments,
  } = video;

  return (
    <>
      <div className="main">
        <h2 className="main__header">{title}</h2>
        <div className="main__stats">
          <div className="main__stats__part">
            <p className="main__stats__part__line-bold">{channel}</p>
            <p className="main__stats__part__line">{timestamp}</p>
          </div>
          <div className="main__stats__part">
            <p className="main__stats__part__line">{views}</p>
            <p className="main__stats__part__line">{likes}</p>
          </div>
        </div>
        <p className="main__description">{description}</p>
        <div className="main__comments"> {comments.length} Comments</div>
        <Comments commentsArr={comments} />
      </div>
    </>
  );
}

export default Main;
