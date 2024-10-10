import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogPost = () => {
  const location = useLocation();
  const { post } = location.state;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">{post.content}</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Back to Blogs
        </button>
      </div>
    </div>
  );
};

export default BlogPost;
