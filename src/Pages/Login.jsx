import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("userData");

    // const savedData = JSON.parse(localStorage.getItem("userData"));
    // if (savedData) {
    //   setEmail(savedData.email);
    //   setPassword(savedData.password);
    // }
  }, []);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!password) {
      newErrors.password = "Password is required.";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      toast.error("Please fix the errors above.");
    } else {
      const userData = { email, password };
      localStorage.setItem("userData", JSON.stringify(userData));

      console.log("Email:", email);
      console.log("Password:", password);
      setUser(email);

      // navigate on home page
      navigate("/");

      setEmail("");
      setPassword("");
      setErrors({});
      toast.success("Login successful!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-gray-200 p-8 rounded shadow-md h-96 w-96">
        <h2 className="text-3xl text-center font-bold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg mb-2">Email*</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className="w-full px-3 py-2 border rounded-full outline-none"
              required
            />
            {errors.email && (
              <div className="text-red-500 text-sm">{errors.email}</div>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-lg">Password*</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors((prev) => ({ ...prev, password: "" }));
              }}
              className="w-full px-3 py-2 border rounded-full outline-none"
              required
            />
            {errors.password && (
              <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>
          <button
            type="submit"
            className="bg-orange-500 rounded-full text-white px-4 py-2  hover:bg-blue-600 w-full"
          >
            Login
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
