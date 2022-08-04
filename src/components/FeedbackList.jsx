import FeedbackItem from "./FeedbackItem";

export default function FeedbackList({ feedbacks }) {
  const count = feedbacks.length;
  const average = (
    feedbacks.map((item) => item.rating).reduce((acc, item) => acc + item) /
    count
  ).toFixed(1);

  return (
    <>
      <ul className="feedback-list">
        <div className="stats">
          <h2>{count} Reviews</h2>
          <h2>Average Rating: {average}</h2>
        </div>
        {feedbacks.map((feedback) => (
          <FeedbackItem
            key={feedback.id}
            rating={feedback.rating}
            text={feedback.text}
          />
        ))}
      </ul>
    </>
  );
}
