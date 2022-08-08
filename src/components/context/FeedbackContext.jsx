import { useState, createContext } from "react";
import starters from "../../starter";
import { nanoid } from "nanoid";

const FeedbackContext = createContext({});

export function FeedbackProvider({ children }) {
  const [feedbacks, setFeedbacks] = useState(starters);
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(10);

  const [edit, setEdit] = useState({
    item: {},
    mode: false,
  });

  function updateFeedback(newFeedback) {
    const id = newFeedback.id;
    setFeedbacks(
      feedbacks.map((item) => {
        return item.id === id
          ? { id: newFeedback.id, rating: rating, text: inputValue }
          : item;
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (edit.mode) {
      updateFeedback(edit.item);
      setEdit({
        item: {},
        mode: false,
      });
    } else {
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
    }

    setInputValue("");
    setRating(10);
  }

  function handleDelete(e) {
    let confirm = window.confirm("Are you sure to delete feedback?");

    if (confirm) {
      const id = e.currentTarget.id;
      setFeedbacks((prev) => prev.filter((item) => item.id !== id));
    }
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
        edit,
        setEdit,
        handleSubmit,
        handleDelete,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;
