import "./Upload.scss";
import Header from "../../components/Header/Header";
import uploadIcon from "../../assets/Icons/publish.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Upload() {
  const navigate = useNavigate();
  const videoPost = (event) => {
    event.preventDefault();

    const newTitle = event.target.title.value;
    const newDescription = event.target.description.value;

    axios
      .post("http://localhost:8080/videos", {
        title: newTitle,
        description: newDescription,
      })
      .then((videoPost) => {
        event.target.reset();
      })
      .catch((err) => err);

    navigate("/success");
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="upload-header">Upload Video</div>
      <form className="upload" onSubmit={videoPost}>
        <div className="upload__videobox">
          <p className="upload__videobox__text">VIDEO THUMBNAIL</p>
          <div className="upload__videobox__video">
            <div className="upload__videobox__video-img"></div>
          </div>
        </div>
        <section>
          <div className="upload__form">
            <div className="upload__form__box">
              <div className="upload__form__box__unit">
                <label
                  className="upload__form__box__unit-label"
                  htmlFor="title"
                >
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
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Add a decription to your video."
                  required
                ></textarea>
              </div>
            </div>
          </div>
          </section>
          <section>
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
      </section>
        </form>
    </div>
  );
}

export default Upload;
