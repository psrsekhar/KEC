import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="navbar navbar-light navbar-expand-lg bg-danger mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          SAIRAM SEKHAR P
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mb-2 me-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/skills">
                Skill Set
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/contact">
                Contact Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/view">
                Get Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
