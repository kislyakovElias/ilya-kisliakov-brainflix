import "./Main.scss";
import Comments from "../Comments/Comments";
import { timestampConvert } from "../../utilities/ulils";
import likeIcon from "../../assets/Icons/likes.svg";
import viewsIcon from "../../assets/Icons/views.svg";

function Main({ video }) {
  const { title, channel, description, views, likes, timestamp, comments } =
    video;

  return (
    <>
      <div className="main">
        <h2 className="main__header">{title}</h2>
        <div className="main__stats">
          <div className="main__stats__part">
            <p className="main__stats__part__line-bold">By {channel}</p>
            <p className="main__stats__part__line">
              {timestampConvert(timestamp)}
            </p>
          </div>
          <div className="main__stats__part">
            <div className="main__stats__part-block">
              <img
                className="main__stats__part-block-img"
                src={viewsIcon}
                alt="views"
              />
              <p className="main__stats__part__line">{views}</p>
            </div>
            <div className="main__stats__part-block">
              <img
                className="main__stats__part-block-img"
                src={likeIcon}
                alt="likes"
              />
              <p className="main__stats__part__line">{likes}</p>
            </div>
          </div>
        </div>
        <p className="main__description">{description}</p>
        <div className="main__comments">
          {" "}
          {comments ? comments.length : ""} Comments
        </div>
        {comments ? <Comments commentsArr={comments} /> : "Nothing to display"}
      </div>
    </>
  );
}

export default Main;
