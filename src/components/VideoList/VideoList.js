import "./VideoList.scss";

function VideoList({ videos }) {
  // const { title, channel, image } = videos;
  return (
    <>
      <div className="videoList">
        <h6 className="videoList__header">NEXT VIDEOS</h6>
        {videos.map((video, key) => (
          <div key={key} class="videoList__content">
            <div class="videoList__content__picture">
              <img
                className="videoList__content__picture-img"
                src={video.image}
                alt="video"
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
