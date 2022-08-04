export default function FeedbackItem({ rating, text }) {
  return (
    <>
      <li className="feedback-item">
        <div className="rating">
          <h2>{rating}</h2>
        </div>
        <p>{text}</p>
      </li>
    </>
  );
}
