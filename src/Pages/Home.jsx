import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Components/Pagination";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);

    const totalPages = Math.ceil(updatedPosts.length / postsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  };

  return (
    <div className="container mx-auto p-7">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">No more data is here.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 flex flex-col justify-between"
                style={{ height: "450px" }}
              >
                <img
                  src="/images/1.jpg"
                  alt=""
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-700 mb-4">
                    {post.body.substring(0, 50)}...
                  </p>
                </div>
                <div className="mt-auto flex justify-between items-center">
                  <Link to={`/blog/${post.id}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                      Read More
                    </button>
                  </Link>
                  <button
                    onClick={() => deletePost(post.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mx-auto items-center mt-20">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
