import "./Video.scss";

function Video(props) {
  return (
    <div>
      <section className="hero">
        <video
          className="hero__video"
          alt="video"
          // src={"../../src/asset/"}
        ></video>

        <div className="hero-controls"></div>
      </section>
    </div>
  );
}

export default Video;
