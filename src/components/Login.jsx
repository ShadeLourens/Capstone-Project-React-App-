import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

// Formik login form with basic email/password validation
export default function Login({ setUsername, setIsLoggedIn }) {
  const navigate = useNavigate();
  // Initializes form state and validation with Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      // Username validation
      if (!values.username) {
        errors.username = "Required";
      }

      // Email validation
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      // Password validation
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      }

      return errors;
    },
    // Handle form submission
    onSubmit: (values) => {
      setUsername(values.username); // - Save the username to global state
      setIsLoggedIn(true); // - Update login status
      alert("You have been logged in successfully!"); // - Showing confirmation alert
      navigate("/"); // - Redirect user to the home page
    },
  });

  return (
    <div className="container pt-5 mt-5" style={{ maxWidth: "400px" }}>
      <h1 className="mb-4 text-center">Login</h1>
      <form onSubmit={formik.handleSubmit}>
        {/* Username Field */}
        <div className="mb-3">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className="text-danger">{formik.errors.username}</div>
          ) : null}
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label htmlFor="email">Email Address</label>
          <input
            className="form-control"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        {/* Password Field */}
        <div className="mb-3">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Login
        </button>
      </form>

      <p className="text-center mt-3">
        <Link to="/register" className="text-dark">
          Create account
        </Link>
      </p>
    </div>
  );
}
