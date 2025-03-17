import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { ProductContext } from "../../context/ProductContext";

const Products = () => {
  const [product] = useContext(ProductContext);

  return (
    <div>
      <div className="text-center my-5 h1">Shopping</div>
      <div className="row g-5">
        {product.map((item) => (
          <SingleProduct key={item.id} propItems={item}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
