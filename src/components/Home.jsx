// Home.jsx
// Landing page layout featuring hero section, ribbon, featured products, benefits, and testimonials

import "./Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FeaturedProducts from "./FeaturedProducts";
import PeptideBenefits from "./PeptideBenefits";
import Testimonials from "./Testimonials";
import Ribbon from "./Ribbon";

export default function Home() {
  // Access username and login status from Redux
  const username = useSelector((state) => state.user.username);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <>
      {/* Hero Section with headline, CTA, and image */}
      <section className="hero-section container-fluid px-0">
        <div className="row g-0 align-items-center min-vh-100">
          {/* Left Column – Headline + CTA */}
          <div className="col-md-6 text-col d-flex flex-column justify-content-center align-items-center px-5 text-center">
            <h1 className="hero-title">Your Skin, Our Formula</h1>
            <p className="hero-subtitle">
              Blending clinical expertise with powerful ingredients,
              <br />
              designed to deliver visible results — with care.
            </p>

            {/* Call-to-action button to products */}
            <Link to="/products" className="hero-cta">
              Shop the Collection
            </Link>
          </div>

          {/* Right Column – Fullscreen model image */}
          <div className="col-md-6 image-col">
            <img
              src="/images/hero-model.jpg"
              alt="Skincare model"
              className="img-fluid w-100 h-100 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Section break: thin visual separator */}
      <Ribbon />

      {/* Featured product preview grid */}
      <FeaturedProducts />

      {/* Why peptides? Accordion section */}
      <PeptideBenefits />

      {/* Social proof / customer love */}
      <Testimonials />
    </>
  );
}
