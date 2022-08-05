import {FaTimes} from 'react-icons/fa'


export default function FeedbackItem({ id,rating, text,handleDelete}) {
  return (
    <>
      <li className="feedback-item">
        <button onClick={handleDelete} id={id} className='delete'>
          <FaTimes size={20} color="darkblue"/>
        </button>
        <div className="rating">
          <h2>{rating}</h2>
        </div>
        <p>{text}</p>
      </li>
    </>
  );
}
