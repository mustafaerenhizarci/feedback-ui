import React, { useState } from "react";

import starter from "./starter";

// Importing Components
import Header from "./components/shared/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [feedbacks, setFeedbacks] = useState(starter);
  return (
    <>
      <div className="header">
        <Header size={1} color={"#fff"} text="Feedback UI" />
      </div>
      <FeedbackForm />
      <FeedbackList feedbacks={feedbacks} />
    </>
  );
}
