// Navbar.jsx
// Main navigation bar with links to routes, login/logout logic, and external Instagram link

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../userSlice";

export default function Navbar() {
  // Grab user state from Redux
  const username = useSelector((state) => state.user.username);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5 transparent-navbar">
      {/* Logo link to homepage */}
      <Link className="navbar-brand" to="/">
        <img src="/images/pH-logo.png" alt="Logo" style={{ height: "40px" }} />
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
          {/* Internal links */}
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

          {/* External Instagram link */}
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

          {/* Auth status: conditional rendering */}
          {isLoggedIn ? (
            <>
              {/* Show greeting if logged in */}
              <li className="nav-item d-flex align-items-center text-dark fw-semibold ms-1">
                <span className="nav-link">Welcome, {username}!</span>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => dispatch(logout())}
                  className="btn custom-login-btn ms-2"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            // Show login button if not logged in
            <li className="nav-item">
              <Link to="/login" className="btn custom-login-btn ms-2">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
