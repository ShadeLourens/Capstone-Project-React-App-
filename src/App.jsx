// App.jsx
// Entry point of the application UI. Defines routes and persistent layout elements.

// React Router imports to handle page navigation
import { Routes, Route } from "react-router-dom";

// Core layout and pages
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Register from "./components/Register";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

// Global styles and Bootstrap for layout & components
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Main App component
export default function App() {
  return (
    <>
      {/* Navbar remains visible across all routes */}
      <Navbar />

      {/* Define all available routes/pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {/* Footer stays at the bottom of all pages */}
      <Footer />
    </>
  );
}
