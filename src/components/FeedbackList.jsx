import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ feedbacks, handleDelete }) {
  const count = feedbacks.length;
  const average =
    feedbacks.length > 0
      ? (
          feedbacks
            .map((item) => item.rating)
            .reduce((acc, item) => acc + item) / count
        ).toFixed(1)
      : 0;

  return (
    <>
      <ul className="feedback-list">
        <div className="stats">
          <h2>{count} Reviews</h2>
          <h2>Average Rating: {average}</h2>
        </div>
        <AnimatePresence>
          {feedbacks.map((feedback) => (
            <motion.div key={feedback.id} animate={{opacity:[0,1]}} exit={{opacity:0}}>
              <FeedbackItem
                id={feedback.id}
                handleDelete={handleDelete}
                key={feedback.id}
                rating={feedback.rating}
                text={feedback.text}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
}