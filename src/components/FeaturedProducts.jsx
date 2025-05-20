// FeaturedProducts.jsx
// Displays a grid of 3 highlighted products using ProductCard components

import productsData from "./productsData";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../cartSlice";

export default function FeaturedProducts() {
  const dispatch = useDispatch();

  // Select the first 3 products to feature
  const featured = productsData.slice(0, 3);

  return (
    <section className="container my-5">
      <h2 className="mb-4 text-center">Featured Products</h2>

      {/* Render 3 featured products in a responsive row */}
      <div className="row g-4">
        {featured.map((product, index) => (
          <div key={index} className="col-md-4">
            <ProductCard
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
              onBuy={() => dispatch(addToCart(product))} // Adds a product to cart on click
            />
          </div>
        ))}
      </div>
    </section>
  );
}
