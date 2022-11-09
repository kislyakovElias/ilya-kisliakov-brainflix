import "./VideoList.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function VideoList(props) {
  let params = useParams();

  console.log(params.videoId, "prms"); //// remove

  useEffect(() => {
    if (params.videoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${params.videoId}?api_key=dc0900dd-0f3b-4b59-a50b-938cbd326362`
        )
        .then((res) => {
          props.setId(res.data.id);
        })
        .catch((error) => console.log(error));
    } else {
      props.setId("84e96018-4022-434e-80bf-000ce4cd12b8");
    }
  }, [params]);

  // Create and call component for that maybe

  return (
    <>
      <div className="videoList">
        <h6 className="videoList__header">NEXT VIDEOS</h6>
        {props.videoList.map((video, key) => (
          <Link className="videoList__content-link" to={`/${video.id}`}>
            <div key={key} className="videoList__content">
              <div className="videoList__content__picture">
                {
                  <img
                    className="videoList__content__picture-img"
                    src={video.image}
                    alt="video"
                  />
                }
              </div>
              <div className="videoList__content__info">
                <div className="videoList__content__info__title">
                  {video.title}
                </div>
                <p className="videoList__content__info__channel">
                  {video.channel}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default VideoList;
