import axios from "axios";
import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { ProductContext } from "../../context/ProductContext";
import { categories } from "../../data/games";
import StaticLang from "../../utils/StaticLang";

const Products = () => {
  const [product] = useContext(ProductContext);
  const [filteredData,setFilteredData] = useState([]);
  const [active,setActive] = useState("");
  const filterProduct = (cat)=>{
    const filterNow = product.filter(p=>p.category === cat);
    setFilteredData(filterNow);
    setActive(cat);

  }
  return (
    <div>
      <div className="text-center my-5 h1"><StaticLang az="Mağaza" en="Shoping"/></div>
      <div className="row">
        <div className="col-3">
          <ul className="list-group">
            {categories.map((item,index)=>(
              <li key={index} className={`list-group-item ${active===item?"activeForCat":""}`} onClick={()=>{filterProduct(item)}} style={{textTransform:"capitalize"}}>{item}</li>
            ))}
            <li className={`list-group-item bg-secondary text-light`} onClick={()=>{filterProduct()}}>All products</li>
          </ul>
        </div>
        <div className="col-9">
          <div className="row g-5">
            {filteredData.length===0?product.map((item) => (
              <SingleProduct key={item.id} propItems={item} />
            )):filteredData.map((item) => (
              <SingleProduct key={item.id} propItems={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
