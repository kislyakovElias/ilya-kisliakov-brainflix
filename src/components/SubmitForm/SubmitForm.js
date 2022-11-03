import "./SubmitForm.scss";
import Avatar from "../Avatar/Avatar";

function SubmitForm() {
  return (
    <>
      <form class="comments__form" id="comments__form">
        <div class="comments__form__imagebox">
          <div class="comments__form__imagebox-pic"></div>
        </div>
        {/* <Avatar /> */}
        <div class="comments__form__box">
          <div class="comments__form__box__unit">
            <label class="comments__form__box__unit-label" for="comment">
              JOIN THE CONVERSATION
            </label>
            <textarea
              id="text"
              type="text"
              name="comment"
              placeholder="Add a new comment.."
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" class="comments__form__box__submit">
              COMMENT
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default SubmitForm;
