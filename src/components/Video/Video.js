import "./Video.scss";

function Video({ video }) {
  // console.log(`${video.video}api_key=${video.apiKey}/${video.id}`);
  return (
    <div>
      <section className="hero">
        <video
          className="hero__video"
          alt="video"
          controls
          src={`${video.video}?api_key=${video.apiKey}/${video.id}`}
          poster={video.image}
          // aspect-ratio="16/9"
        ></video>

        <div className="hero-controls"></div>
      </section>
    </div>
  );
}

export default Video;
