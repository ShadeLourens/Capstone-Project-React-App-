import { Link } from "react-router-dom";

// Navigation bar with links to main routes and external Instagram
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5 transparent-navbar">
      <Link className="navbar-brand" to="/">
        {/* pHformula logo */}
        <img src="/images/pH-logo.png" alt="Logo" style={{ height: "40px" }} />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>

          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.instagram.com/phformula/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          {/* Login Button */}
          <li className="nav-item">
            <Link to="/login" className="btn custom-login-btn ms-2">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
