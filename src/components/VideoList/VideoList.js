import "./VideoList.scss";

function VideoList(props) {
  return (
    <>
      <div className="videoList">
        <h6 className="videoList__header">NEXT VIDEOS</h6>
        {props.videoList.map((video, key) => (
          <div key={key} className="videoList__content">
            <div className="videoList__content__picture">
              <img
                className="videoList__content__picture-img"
                src={video.image}
                alt="video"
                onClick={(event) => props.onClick(event, video.id)}
              />
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
        ))}
      </div>
    </>
  );
}

export default VideoList;
