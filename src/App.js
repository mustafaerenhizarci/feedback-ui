import React, { useState } from "react";
import { nanoid } from "nanoid";
import starter from "./starter";

// Importing Components
import Header from "./components/shared/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(starter);
  const [inputValue, setInputValue] = useState("");
  const [rating, setRating] = useState(10);

  function handleSubmit(e) {
    e.preventDefault();
    setFeedbacks((prev) => {
      return (prev) ? [{ id:nanoid(5), rating: rating, text: inputValue },...prev] : [{ id: nanoid(5), rating: rating, text: inputValue }] 
    });

    setInputValue("");
  }

  function handleDelete(e) {
    const id = e.currentTarget.id;

    setFeedbacks((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="header">
        <Header size={1} color={"#fff"} text="Feedback UI" />
      </div>
      <FeedbackForm
        setRating={setRating}
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <FeedbackList handleDelete={handleDelete} feedbacks={feedbacks} />
    </>
  );
}
