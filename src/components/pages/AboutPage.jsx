import Header from "../shared/Header"
import {Link} from "react-router-dom"

export default function AboutPage() {
  return <div className="about">
    <Header text="About" size={1} color="#7B1FA2"/>
    <p>This is a basic feedback UI to get reviews from the users.</p>
    <p>Version: 1.0.0</p>
    <Link to="/">
        <p>Back to home</p>
    </Link>
  </div>
}
