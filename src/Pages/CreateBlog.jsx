import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    coverImage: "",
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    existingPosts.push(formData);

    localStorage.setItem("blogPosts", JSON.stringify(existingPosts)); // Store updated array
    toast.success("Your Post has been successfully created!");

    // Reset form
    setFormData({
      title: "",
      content: "",
      coverImage: "",
    });

    // Navigate to the MyBlog page
    // navigate("/myblog");
  };

  return (
    <div className="p-6 bg-gray-200 sm:w-[500px] my-5 m-auto rounded-lg shadow-lg">
      <h1 className="text-3xl text-center mb-4">Create Your Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-xl font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter your title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md "
            required
          />
        </div>

        <div>
          <label htmlFor="content" className="block text-xl font-medium mb-1">
            Content
          </label>
          <textarea
            name="content"
            id="content"
            placeholder="Write your post content here..."
            value={formData.content}
            onChange={handleChange}
            className="w-full h-40 px-3 py-2 border rounded-md "
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit Post
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateBlog;
