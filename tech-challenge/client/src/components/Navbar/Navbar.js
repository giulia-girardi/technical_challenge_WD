import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav>
      <Link to="/">
        <button>Back to list</button>
      </Link>
    </nav>
  );
}

export default Navbar;