import Header from "./shared/Header";

export default function FeedbackForm() {
  return (
    <>
      <form className="feedback-form">
        <Header size={2} text="How would you rate your service with us?" />
        <ul className="form-list">
          <li>
            <input type="radio" id="1" name="rating" />
            <label>1</label>
          </li>
          <li>
            <input type="radio" id="2" name="rating" />
            <label>2</label>
          </li>
          <li>
            <input type="radio" id="3" name="rating" />
            <label>3</label>
          </li>
          <li>
            <input type="radio" id="4" name="rating" />
            <label>4</label>
          </li>
          <li>
            <input type="radio" id="5" name="rating" />
            <label>5</label>
          </li>
          <li>
            <input type="radio" id="6" name="rating" />
            <label>6</label>
          </li>
          <li>
            <input type="radio" id="7" name="rating" />
            <label>7</label>
          </li>
          <li>
            <input type="radio" id="8" name="rating" />
            <label>8</label>
          </li>
          <li>
            <input type="radio" id="9" name="rating" />
            <label>9</label>
          </li>
          <li>
            <input type="radio" id="10" name="rating" />
            <label>10</label>
          </li>
        </ul>

        <div className="input-group">
            <input autoComplete="off" type="text" placeholder="Write a review"/>
            <button>Send</button>
        </div>
      </form>
    </>
  );
}
