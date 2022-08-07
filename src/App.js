import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing Components
import Header from "./components/shared/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import AboutIcon from "./components/AboutIcon";
import AboutPage from "./components/pages/AboutPage";
import { FeedbackProvider } from "./components/context/FeedbackContext";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <div className="header">
          <Header size={1} color={"#fff"} text="Feedback UI" />
        </div>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackList />
                <AboutIcon />
              </>
            }
          ></Route>
          <Route exact path="/home" element={<AboutPage />}></Route>
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}
