import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex bg-emerald-500 h-15 items-center p-5 text-2xl font-semibold justify-between">
      <h2>Navbar</h2>
      <div className="w-1/4 flex justify-evenly">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Products</Link>
      </div>
    </div>
  );
};

export default Navbar;
