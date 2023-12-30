import React from "react";
import { useState } from "react";
import logo from "../images/optiven-logo-full.f498da6255572ff1ab8a.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-green-600 mb-5">
      <div className="relative flex items-center justify-between">
        <img src={logo} alt="logo " className="h-8 px-4" />
        <ul className="flex items-center hidden space-x-10 lg:flex">
          <li>
            <Link to="/" className="px-2 m-2 text-xl font-semibold font-serif ">
              Logout
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              {/* SVG paths */}
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              {/* ... */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
