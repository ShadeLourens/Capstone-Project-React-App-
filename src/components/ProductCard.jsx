// ProductCard.jsx
// A reusable card component to display individual product info and allow adding to cart

import "./ProductCard.css";

export default function ProductCard({
  name,
  price,
  image,
  description,
  onBuy, // Callback triggered when "Add to Bag" is clicked
}) {
  return (
    <div className="product-card card border-0 shadow-sm h-100">
      {/* Product image */}
      <img src={image} className="card-img-top product-image" alt={name} />

      {/* Product details + Add to Bag button */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-3">
          <h6 className="product-name text-uppercase">{name}</h6>
          <p className="product-description">{description}</p>
          <h5 className="product-price">R{price.toFixed(2)}</h5>
        </div>

        {/* Buy button triggers Redux add-to-cart via parent */}
        <button className="add-to-cart-btn" onClick={onBuy}>
          Add to Bag
        </button>
      </div>
    </div>
  );
}
