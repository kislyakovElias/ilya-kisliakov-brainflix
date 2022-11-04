import "./SubmitForm.scss";

function SubmitForm() {
  return (
    <>
      <form className="comments__form" id="comments__form">
        <div className="comments__form__imagebox">
          <div className="comments__form__imagebox-pic"></div>
        </div>
        <div className="comments__form__box">
          <div className="comments__form__box__unit">
            <label className="comments__form__box__unit-label" for="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="comments__form__box__unit__text"
              id="text"
              type="text"
              name="comment"
              placeholder="Add a new comment.."
              required
            ></textarea>
          </div>
          <div className="comments__form__box__submit">
            <button type="submit" className="comments__form__box__submit-btn">
              COMMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SubmitForm;
