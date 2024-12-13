import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Header() {

  const location = useLocation();

  let title;
  switch (location.pathname) {
    case '/list':
      title = 'List';
      break;
    case '/add':
      title = 'Add';
      break;
    default:
      title = 'Home';
  }

  return (
    <div id="navbardiv">
      <div id="navbarcontainer">
        <h1>{title}</h1>
        <h2>NoteApp</h2>
        <ul id="navbarul">
          <li className="navbarli"><Link to="/list">List</Link></li>
          <li className="navbarli"><Link to="/add">Add</Link></li>
          <li className="navbarli"><Link to="/">Home</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
