import React from "react";
import { useNavigate } from "react-router-dom";

const MyBlog = () => {
  const navigate = useNavigate();
  const storedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];

  const handleReadMore = (post) => {
    navigate("/blogpost", { state: { post } });
  };

  return (
    <>
      <div>
        <h1 className="text-3xl mt-4 text-center font-semibold">
          My Latest Blogs
        </h1>
      </div>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {storedPosts.length > 0 ? (
          storedPosts.map((post, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-md p-4 w-full h-[350px] flex flex-col justify-between"
            >
              <h1 className="font-bold text-xl">{post.title}</h1>
              <p className="flex-grow truncate">
                {post.content.slice(0, 100)}...
              </p>{" "}
              <button
                onClick={() => handleReadMore(post)} // Handle button click to read more
                className="mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p className="text-center mt-4">
            No blog posts available. Create a new post to see it here.
          </p>
        )}
      </div>
    </>
  );
};

export default MyBlog;
