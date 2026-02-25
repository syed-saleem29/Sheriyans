import React, { useContext } from "react";
import { ProductContextData } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const productData = useContext(ProductContextData);

  let renderData = "Loading...";

  if (productData.length > 0) {
    renderData = productData.map((elem, idx) => {
      return (
        <Link className="h-80 w-50 text-center flex justify-center items-center bg-amber-200 flex-col" key={idx} to={`/products/${elem.id}`}>
          <>
            <img className="w-20 h-30 object-fil " src={elem.image} alt="" />
            <h2> {elem.title}</h2>
          </>
        </Link>
      );
    });
  }

  return <div className="flex flex-wrap gap-1 ">{renderData}</div>;
};

export default Products;
