// Register.jsx
// Handles new user registration with Formik, validation, and a Bootstrap toast alert.
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";
import { useState } from "react";

export default function Register() {
  // Local state to show/hide success toast message
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  // Formik setup: handles form state, validation, and submission
  const formik = useFormik({
    initialValues: {
      firstName: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    // Basic form validation
    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length > 15) {
        errors.firstName = "Must be 15 characters or less";
      }

      if (!values.surname) {
        errors.surname = "Required";
      } else if (values.surname.length > 20) {
        errors.surname = "Must be 20 characters or less";
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
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/.test(
          values.password
        )
      ) {
        errors.password =
          "Must be 8+ characters, include uppercase, lowercase, number and special char";
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    },

    // Triggered on form submit
    onSubmit: (values, { resetForm }) => {
      setShowToast(true); // Shows a success toast
      resetForm();
      setTimeout(() => {
        navigate("/login"); // Redirects after a short delay
      }, 2000);
    },
  });

  return (
    <div className="container pt-5 mt-5" style={{ maxWidth: "500px" }}>
      <h1 className="text-center mb-4">Create Account</h1>

      {/* Registration form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName">First Name</label>
          <input
            className="form-control"
            id="firstName"
            name="firstName"
            type="text"
            style={{ borderRadius: "20px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="text-danger">{formik.errors.firstName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="surname">Surname</label>
          <input
            className="form-control"
            id="surname"
            name="surname"
            type="text"
            style={{ borderRadius: "20px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surname}
          />
          {formik.touched.surname && formik.errors.surname && (
            <div className="text-danger">{formik.errors.surname}</div>
          )}
        </div>

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

        <div className="mb-3">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            style={{ borderRadius: "20px" }}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-danger">{formik.errors.confirmPassword}</div>
          )}
        </div>

        <button type="submit" className="hero-cta">
          Register
        </button>
      </form>

      {/* Bootstrap success toast */}
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
            You have registered successfully!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}
