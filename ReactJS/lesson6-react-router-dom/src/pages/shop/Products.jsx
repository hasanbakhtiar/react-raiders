import axios from "axios";
import { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProduct(res.data));
  }, []);
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
