import { FaQuestion } from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function AboutIcon() {
  return (
    <Link className="about-icon" to={"/home"}>
        <FaQuestion size={30} color="#fff"/>
    </Link>
  );
}
