// Login.jsx
// Handles user login with Formik form, validation, Redux state update, and toast feedback.

import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";
import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";

export default function Login() {
  // Controls display of the success toast
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Setup form with Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },

    // Basic validation for all three fields
    validate: (values) => {
      const errors = {};

      if (!values.username) {
        errors.username = "Required";
      }

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }

      return errors;
    },

    // Handle form submission
    onSubmit: (values, { resetForm }) => {
      dispatch(login(values.username)); // Dispatch username to Redux
      setShowToast(true); // Triggers a toast notification
      resetForm(); // Clears the form fields
      setTimeout(() => {
        navigate("/"); // Redirects to homepage after delay
      }, 2000);
    },
  });

  return (
    <div className="container pt-5 mt-5" style={{ maxWidth: "400px" }}>
      <h1 className="mb-4 text-center">Login</h1>

      {/* Login Form */}
      <form onSubmit={formik.handleSubmit}>
        {/* Username Field */}
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            id="username"
            name="username"
            type="text"
            style={{ borderRadius: "20px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <div className="text-danger">{formik.errors.username}</div>
          )}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            style={{ borderRadius: "20px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            style={{ borderRadius: "20px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-danger">{formik.errors.password}</div>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="hero-cta">
          Login
        </button>
      </form>

      {/* Link to Register page */}
      <p className="text-center mt-3">
        <Link to="/register" className="text-dark">
          Create account
        </Link>
      </p>

      {/* Toast Notification */}
      <ToastContainer
        position="middle-center"
        className="custom-toast-container"
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
        >
          <Toast.Body className="text-dark fw-semibold text-center">
            You have been logged in successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
