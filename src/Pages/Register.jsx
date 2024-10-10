import React, { useState } from "react";
import { UserSchema } from "../Components/FormValidation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    mobileNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleOnChange = async (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    try {
      await UserSchema.validateAt(name, { ...formData, [name]: value });
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    } catch (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: validationError.message,
      }));
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserSchema.validate(formData, { abortEarly: false });
      toast.success("Registration successful!");
      console.log("Form Data Submitted:", formData);

      // Clear form data
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
      });
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setErrors(newError);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleOnSubmit}
        className="bg-gray-200 p-6 rounded-lg shadow-md sm:w-full "
      >
        <h2 className="text-2xl font-bold mb-5 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-xl  mb-2">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleOnChange}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none "
          />
          {errors.username && (
            <div className="text-red-500">{errors.username}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-xl  mb-2">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleOnChange}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none "
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>

        <div className="mb-4">
          <label className="block  text-xl   mb-2">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleOnChange}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none "
          />
          {errors.mobileNumber && (
            <div className="text-red-500">{errors.mobileNumber}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-xl  mb-2">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleOnChange}
            className="w-full p-3 border border-gray-300 rounded-full focus:outline-none "
          />
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="block  text-xl mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleOnChange}
            className="w-full p-3 border rounded-full focus:outline-none "
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword}</div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500  text-white p-2 text-xl rounded-full hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Form;
