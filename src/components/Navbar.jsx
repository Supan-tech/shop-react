import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="font-bold text-white text-lg">Supan Store
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/products" className="text-white">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
