import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ user, setUser }) => {
  return (
    <div>
      <Navbar user={user} />
      <main className="container mx-auto my-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
