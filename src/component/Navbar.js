import React from "react";

import logo from "../images/optiven-logo-full.f498da6255572ff1ab8a.png";

const Navbar = () => {
  return (
    <div className="bg-green-600 mb-5 fixed w-screen">
      <div className="relative flex items-center justify-between">
        <img src={logo} alt="logo " className="h-8 px-4" />
      </div>
    </div>
  );
};

export default Navbar;
