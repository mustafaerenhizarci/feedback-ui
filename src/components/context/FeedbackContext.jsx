import { useState, createContext } from "react";
import starters from "../../starter";
import { nanoid } from "nanoid";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState(starters);
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(10);

  function handleSubmit(e) {
    e.preventDefault();
    setFeedbacks((prev) => {
      return prev
        ? [{ id: nanoid(5), rating: rating, text: inputValue }, ...prev]
        : [
            {
              id: nanoid(5),
              rating: rating,
              text: inputValue,
            },
          ];
    });

    setInputValue("");
  }

  function handleDelete(e) {
    const id = e.currentTarget.id;
    setFeedbacks((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        setFeedbacks,
        inputValue,
        setInputValue,
        rating,
        setRating,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
