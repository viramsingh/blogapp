import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    };

    fetchPost();
  }, [id]);

  if (!post) return <div className="text-center">Loading...</div>;

  const imageUrl = "/images/1.jpg";

  return (
    <div className="container mx-auto p-5">
      <div className="px-5 sm:px-10 py-10 rounded-lg shadow-lg max-w-3xl mx-auto">
        <img
          src={imageUrl}
          alt="Blog Cover"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
        <p className="mt-2 text-gray-700 text-base sm:text-lg">{post.body}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
