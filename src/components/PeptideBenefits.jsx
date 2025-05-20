// PeptideBenefits.jsx
// Displays a split section with an image and Bootstrap accordion to highlight skincare benefits

import React from "react";
import "./PeptideBenefits.css";

export default function PeptideBenefits() {
  return (
    <section className="container my-5">
      {/* Section Heading */}
      <h2 className="peptide-heading text-center fw-bold mb-5">
        Peptide Based Skincare
      </h2>

      <div className="row align-items-center">
        {/* Left Column – Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/model2.png"
            alt="Peptide skincare"
            className="why-img img-fluid shadow-sm"
          />
        </div>

        {/* Right Column – Accordion with Benefits */}
        <div className="col-md-6">
          <div className="accordion" id="peptideAccordion">
            {/* Map through benefit items to render accordion content */}
            {[
              {
                title: "BETTER FOR YOU FORMULATIONS",
                content:
                  "Our products are formulated to have effective ingredients without fillers or parabens.",
              },
              {
                title: "MOISTURIZING",
                content:
                  "Peptide technology focuses on moisturizing and hydrating ingredients.",
              },
              {
                title: "ADVANCED FORMULA",
                content:
                  "Medical-grade isn’t just a gimmick. We formulate for efficacy.",
              },
              {
                title: "UNIVERSAL",
                content:
                  "Our products can be used on all skin and melanin types.",
              },
              {
                title: "LOW IMPACT",
                content: "Our tubes are better for our earth and oceans.",
              },
              {
                title: "NOT TESTED ON ANIMALS",
                content:
                  "We love animals! Our products are leaping bunny certified and not tested on animals.",
              },
            ].map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`heading${index}`}>
                  <button
                    className={`accordion-button ${
                      index !== 0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded={index === 0 ? "true" : "false"}
                    aria-controls={`collapse${index}`}
                  >
                    {item.title}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className={`accordion-collapse collapse ${
                    index === 0 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${index}`}
                  data-bs-parent="#peptideAccordion"
                >
                  <div className="accordion-body">{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
