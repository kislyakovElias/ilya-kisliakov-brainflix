import "./VideoList.scss";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function VideoList(props) {
  let params = useParams();

  useEffect(() => {
    if (params.videoId) {
      axios
        .get(`${props.url}/${params.videoId}`)
        .then((res) => {
          props.setId(res.data.id);
        })
        .catch((error) => console.log(error));
    } else {
      props.setId("84e96018-4022-434e-80bf-000ce4cd12b8");
    }
  }, [params]);

  return (
    <>
      <div className="videoList">
        <h6 className="videoList__header">NEXT VIDEOS</h6>
        {props.videoList.map((video) => (
          <Link
            className="videoList__content-link"
            key={video.id}
            to={`/${video.id}`}
          >
            <div className="videoList__content">
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
