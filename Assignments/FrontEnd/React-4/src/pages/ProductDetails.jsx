import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContextData } from "../context/ProductContext";

const ProductDetails = () => {
  const productData = useContext(ProductContextData);

  const { productId } = useParams();

  let selectedProduct = "";

  if (productData.length > 0) {
    selectedProduct = productData.find((elem) => elem.id == productId);
  }

  return (
    <div>
      <div className="h-80 w-50 text-center flex justify-center items-center bg-amber-200 flex-col">
        <img className="w-20 h-30 object-fil " src={selectedProduct.image} alt="" />
        <h2>{selectedProduct.title}</h2>
        <h5>${selectedProduct.price}</h5>
      </div>
    </div>
  );
};

export default ProductDetails;
