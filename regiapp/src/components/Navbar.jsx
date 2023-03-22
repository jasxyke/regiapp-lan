import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Upload
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/masterlist" className="nav-link">
              Masterlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
