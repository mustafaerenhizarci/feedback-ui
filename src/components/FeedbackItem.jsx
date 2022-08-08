import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "./context/FeedbackContext";
import { useContext } from "react";

export default function FeedbackItem({ id, rating, text, handleDelete }) {
  const { feedbacks, setEdit } = useContext(FeedbackContext);

  function handleEdit() {
    setEdit({
      item: feedbacks.filter((feedback) => feedback.id === id)[0],
      mode: true,
    });
  }

  return (
    <>
      <li className="feedback-item">
        <button onClick={handleDelete} id={id} className="delete">
          <FaTimes size={20} color="darkblue" />
        </button>
        <button onClick={handleEdit} id={id} className="edit">
          <FaEdit size={20} color="darkblue" />
        </button>
        <div className="rating">
          <h2>{rating}</h2>
        </div>
        <p>{text}</p>
      </li>
    </>
  );
}
