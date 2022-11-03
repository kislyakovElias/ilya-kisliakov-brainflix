import "./Comments.scss";
import SubmitForm from "../SubmitForm/SubmitForm";
import { timestampConvert } from "../../utilities/ulils";

function Comments({ commentsArr }) {
  return (
    <>
      <div className="comments">
        <SubmitForm />
        {/*  */}
        {commentsArr.map((comment, key) => (
          <div className="comments__container">
            <div className="comments__container__box">
              <div className="comments__container__box__imagebox">
                <div className="comments__container__box__imagebox-pic"></div>
              </div>
              <div className="comments__container__box__content">
                <div className="comments__container__box__content-top">
                  <div className="comments__container__box__content-top-header">
                    {comment.name}
                  </div>
                  <div className="comments__container__box__content-top-date">
                    {timestampConvert(comment.timestamp)}
                  </div>
                </div>

                <div className="comments__container__box__content-text">
                  {comment.comment}
                </div>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </>
  );
}

export default Comments;
