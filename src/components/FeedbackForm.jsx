import { useState, useContext, useEffect, useRef } from "react";
import Header from "./shared/Header";
import FeedbackContext from "./context/FeedbackContext";

export default function FeedbackForm() {
  const { rating, setRating, inputValue, setInputValue, handleSubmit, edit } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (edit.mode === true) {
      inputRef.current.focus();
      setInputValue(edit.item.text);
      setRating(edit.item.rating);
    }
  }, [edit]);

  const inputRef = useRef(null);
  const [info, setInfo] = useState("");

  const handleRating = (e) => {
    setRating(+e.target.id);
  };

  const handleChange = (e) => {
    const currentValue = e.target.value;
    setInputValue(currentValue);

    if (currentValue !== "" && currentValue.trim().length < 10) {
      setInfo("Text must be at least 10 characters");
    } else {
      setInfo("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="feedback-form">
        <Header size={2} text="How would you rate your service with us?" />
        <ul className="form-list">
          <li>
            <input
              onChange={handleRating}
              checked={rating === 1}
              type="radio"
              id="1"
              name="rating"
            />
            <label>1</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 2}
              type="radio"
              id="2"
              name="rating"
            />
            <label>2</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 3}
              type="radio"
              id="3"
              name="rating"
            />
            <label>3</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 4}
              type="radio"
              id="4"
              name="rating"
            />
            <label>4</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 5}
              type="radio"
              id="5"
              name="rating"
            />
            <label>5</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 6}
              type="radio"
              id="6"
              name="rating"
            />
            <label>6</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 7}
              type="radio"
              id="7"
              name="rating"
            />
            <label>7</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 8}
              type="radio"
              id="8"
              name="rating"
            />
            <label>8</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              checked={rating === 9}
              type="radio"
              id="9"
              name="rating"
            />
            <label>9</label>
          </li>
          <li>
            <input
              onChange={handleRating}
              type="radio"
              id="10"
              name="rating"
              checked={rating === 10}
            />
            <label>10</label>
          </li>
        </ul>

        <div className="input-group">
          <input
            ref={inputRef}
            onChange={handleChange}
            value={inputValue}
            autoComplete="off"
            type="text"
            placeholder="Write a review"
            autoFocus={true}
          />
          <button disabled={inputValue.length <= 10} type="submit">
            Send
          </button>
        </div>
        <div className="info">
          <p>{info}</p>
        </div>
      </form>
    </>
  );
}
