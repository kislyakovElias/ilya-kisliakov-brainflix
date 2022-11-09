import "./Upload.scss";
import Header from "../../components/Header/Header";

function Upload() {
  return (
    <div>
      <Header />
      <section className="upload">
        <div className="upload__header">Upload Video</div>
        <div className="upload__videobox">
          <p>VIDEO THUMBNAIL</p>
          <img
            className="upload__videobox__video"
            alt="video"
            src={"../assets/images/Upload-video-preview.jpg"}
          />
        </div>
        <div className="upload__form">form</div>

        <div className="upload-controls"></div>
      </section>
    </div>
  );
}

export default Upload;
