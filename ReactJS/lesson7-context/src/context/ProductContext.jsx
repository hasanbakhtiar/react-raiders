import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/58670812-c425-4fa0-ae8e-e21abbb631a6")
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <ProductContext.Provider value={[product, setProduct]}>
      {children}
    </ProductContext.Provider>
  );
};
