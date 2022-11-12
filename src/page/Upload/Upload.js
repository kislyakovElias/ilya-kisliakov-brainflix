import "./Upload.scss";
import Header from "../../components/Header/Header";
import uploadIcon from "../../assets/Icons/publish.svg";
import { Link } from "react-router-dom";

function Upload() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="upload__header">Upload Video</div>
      <section className="upload">
        <div className="upload__videobox">
          <p className="upload__videobox__text">VIDEO THUMBNAIL</p>
          <div className="upload__videobox__video">
            <div className="upload__videobox__video-img"></div>
          </div>

          {/* <img src="../assets/images/Upload-video-preview.jpg" alt="vimage" /> */}
        </div>
        <form className="upload__form">
          <div className="upload__form__box">
            <div className="upload__form__box__unit">
              <label className="upload__form__box__unit-label" htmlFor="title">
                TITLE YOUR VIDEO
              </label>
              <input
                className="upload__form__box__unit__title"
                id="title"
                type="text"
                name="title"
                placeholder="Add a title to your video"
                required
              ></input>
            </div>
            <div className="upload__form__box__unit">
              <label
                className="upload__form__box__unit-label"
                htmlFor="comment"
              >
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                className="upload__form__box__unit__text"
                id="text"
                type="text"
                name="comment"
                placeholder="Add a decription to your video."
                required
              ></textarea>
            </div>
          </div>
        </form>
      </section>
      <div className="upload__form__box__submit">
        <button type="submit" className="upload__form__box__submit-btn">
          <img
            className="upload__form__box__submit-icon"
            alt="comment"
            src={uploadIcon}
          />
          PUBLISH
        </button>
        <div className="upload__cancel">
          <Link className="upload__cancel" to="/">
            <button className="upload__cancel__button">CANCEL</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upload;
