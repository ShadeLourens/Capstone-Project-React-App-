// Products.jsx
// Displays a grid of products with the ability to add items to the Redux cart.

import ProductCard from "./ProductCard";

// Product data (e.g. name, price, image, etc.)
import productsData from "./productsData";

// Redux: used to dispatch actions to global state
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

export default function Products() {
  const dispatch = useDispatch();

  // Handler: add selected product to the cart
  const handleBuy = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-grid container mt-5 pt-5">
      <h1 className="text-center mb-4">Daily Essentials</h1>

      {/* Grid of product cards rendered through .map() */}
      <div className="row g-4">
        {productsData.map((product) => (
          <div key={product.id} className="col-sm-6 col-md-4 col-lg-3">
            <ProductCard {...product} onBuy={() => handleBuy(product)} />
          </div>
        ))}
      </div>
    </div>
  );
}
