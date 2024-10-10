import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center mb-2 md:mb-0">
          <img src={`./images/blogger.png`} alt="Logo" className="h-10 mr-1" />
          <span className="text-white text-2xl font-bold">Blog</span>
        </Link>
        <ul className="flex flex-wrap items-center space-x-4 md:space-x-8">
          <li>
            <Link to="/" className="text-gray-300 hover:text-white text-xl">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/create-post"
              className="text-gray-300 hover:text-white text-xl"
            >
              Create Blog {""}
            </Link>
          </li>
          <li>
            <Link
              to="/my-blog"
              className="text-gray-300 hover:text-white text-xl"
            >
              MyBlog
            </Link>
          </li>
          {user ? (
            <li className="text-gray-300">
              Welcome, <span className="text-white">{user}</span>
            </li>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full md:w-auto">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/register">
                  <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full md:w-auto">
                    SignUp
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
