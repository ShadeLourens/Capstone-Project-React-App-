import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ username, isLoggedIn }) {
  return (
    <>
      <section className="hero-section container-fluid px-0">
        <div className="row g-0 align-items-center min-vh-100">
          {/* Text Column */}
          <div className="col-md-6 text-col d-flex flex-column justify-content-center align-items-center px-5 text-center">
            {isLoggedIn && <p className="welcome-text">Welcome, {username}!</p>}

            <h1 className="hero-title">Your Skin, Our Formula</h1>
            <p className="hero-subtitle">
              Blending clinical expertise with powerful ingredients,
              <br />
              designed to deliver visible results — with care.
            </p>

            <Link to="/products" className="hero-cta">
              Shop the Collection
            </Link>
          </div>

          {/* Image Column */}
          <div className="col-md-6 image-col">
            <img
              src="/images/hero-model.jpg"
              alt="Skincare model"
              className="img-fluid w-100 h-100 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Ribbon */}
      <section className="ribbon">
        <div className="ribbon-track">
          <p>
            ' | ' | ' VEGAN ' | ' | ' CRUELTY-FREE ' | ' | ' PARABEN-FREE ' | '
            | ' DERMATOLOGIST TESTED ' | ' | ' VEGAN ' | ' | ' CRUELTY-FREE ' |
            ' | ' PARABEN-FREE ' | ' | ' DERMATOLOGIST TESTED ' | ' | ' VEGAN '
            | ' | ' CRUELTY-FREE ' | ' | ' PARABEN-FREE ' | ' | ' DERMATOLOGIST
            TESTED ' | ' | ' VEGAN ' | ' | ' CRUELTY-FREE ' | ' | ' PARABEN-FREE
            ' | ' | ' DERMATOLOGIST TESTED ' | ' | ' VEGAN ' | ' | '
            CRUELTY-FREE ' | ' | ' PARABEN-FREE ' | ' |
          </p>
        </div>
      </section>
    </>
  );
}
