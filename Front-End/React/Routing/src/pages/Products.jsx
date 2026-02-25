import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" min-h-scree absolute top-1/2 left-1/2 text-7xl -translate-1/2 flex justify-center flex-col items-center">
      Product Page

      <div className="flex gap-3 mt-5 justify-center">
        <Link className="text-2xl px-15 py-4 rounded bg-emerald-300 " to="/product/womens">Womens Products</Link>
        <Link className="text-2xl px-15 py-4 rounded bg-emerald-300 " to="/product/mens">Mens Products</Link>
      </div>
    </div>
  );
};

export default Home;
