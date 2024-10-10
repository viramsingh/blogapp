import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import BlogDetail from "./Pages/BlogDetail";
import NotFound from "./Pages/NotFound";
import CreateBlog from "./Pages/CreateBlog";
import MyBlog from "./Pages/MyBlog";
import BlogPost from "./Pages/BlogPost";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar user={user} />
        <main className="flex-grow">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/create-post" element={<CreateBlog />} />
            <Route path="/my-blog" element={<MyBlog />} />
            <Route path="/blogpost" element={<BlogPost />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* /:img */}
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
