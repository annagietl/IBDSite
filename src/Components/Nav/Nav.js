import { Link } from "react-router-dom";

// this is our navigation bar so we can jump between sections
// css was used to make it look nice and also flexible for its environment
const Nav = () => (
  // <!-- Navigation bar to jump between website sections -->
  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/calendar">Calendar</Link>
      </li>
      <li>
        <a href="/notes">Notes</a>
      </li>
      <li>
        <a href="moreInfo">Calorie Tracking</a>
      </li>
    </ul>
  </nav>
);

export default Nav;