import "./VideoList.scss";

function VideoList({ videos }) {
  // const { title, channel, image } = videos;
  return (
    <>
      <div class="videoList">
        <h6 class="videoList__header">NEXT VIDEOS</h6>
        {videos.map((video, key) => (
          <div class="videoList__content">
            <div class="videoList__content__picture">
              <img
                class="videoList__content__picture-img"
                src={video.image}
                alt="video"
              />
            </div>
            <div class="videoList__content__info">
              <div class="videoList__content__info__title">{video.title}</div>
              <p class="videoList__content__info__channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default VideoList;
