import { useState, createContext, useEffect } from "react";

import { nanoid } from "nanoid";

const FeedbackContext = createContext({});

export function FeedbackProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(10);
  const [edit, setEdit] = useState({
    item: {},
    mode: false,
  });

  useEffect(() => {
    fetchFeedbacks();
    setIsLoading(false);
  }, []);

  async function fetchFeedbacks() {
    const response = await fetch("/feedbacks?");
    const data = await response.json();
    setFeedbacks(data);
    return 0;
  }

  async function updateFeedback(newFeedback) {
    const id = newFeedback.id;
    const response = await fetch("/feedbacks/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: nanoid(5), rating: rating, text: inputValue }),
    });

    const data = await response.json();

    setFeedbacks(
      feedbacks.map((item) => {
        return item.id === id ? data : item;
      })
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (edit.mode) {
      await updateFeedback(edit.item);
      setEdit({
        item: {},
        mode: false,
      });
    } else {
      const response = await fetch("/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: nanoid(5),
          rating: rating,
          text: inputValue,
        }),
      });
      const data = await response.json();
      setFeedbacks([data, ...feedbacks]);
    }

    setInputValue("");
    setRating(10);
  }

  async function handleDelete(e) {
    let confirm = window.confirm("Are you sure to delete feedback?");

    if (confirm) {
      const id = e.currentTarget.id;

      await fetch("/feedbacks/" + id, { method: "DELETE" });
      setFeedbacks(feedbacks);

      setFeedbacks(feedbacks.filter((item) => item.id !== id));
    }
  }

  return (
    <FeedbackContext.Provider
      value={{
        isLoading,
        setIsLoading,
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
