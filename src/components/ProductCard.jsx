import "./ProductCard.css";
// ProductCard displays a single product with image, details, color selection, and a buy button
export default function ProductCard({
  name,
  price,
  image,
  description,
  onBuy, // Handler for "Add to Cart" click
}) {
  return (
    <div className="product-card card border-0 shadow-sm h-100">
      <img src={image} className="card-img-top product-image" alt={name} />

      <div className="card-body d-flex flex-column justify-content-between">
        <div className="mb-3">
          <h6 className="product-name text-uppercase">{name}</h6>
          <p className="product-description">{description}</p>
          <h5 className="product-price">R{price.toFixed(2)}</h5>
        </div>

        <button className="add-to-cart-btn" onClick={onBuy}>
          Add to Bag
        </button>
      </div>
    </div>
  );
}
