
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import slugify from "slugify";
import { ProductContext } from "../../context/ProductContext";

const ProductDetails = () => {
  const { slug } = useParams();
const [product]=useContext(ProductContext);


  const singleData = product.find(
    (p) => slugify(p.title, { lower: true }) === slug
  );

  return(
    <>
    {singleData===undefined?<p className="text-center alert alert-warning h3 my-5">Loading...</p>:<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={singleData.image} className="d-block mx-lg-auto img-fluid" alt={singleData.title} width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{singleData.title}</h1>
      <p className="lead">{singleData.description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button onClick={()=>{window.history.back()}} className="btn btn-dark btn-lg px-4 me-md-2">Back</button>
      </div>
    </div>
  </div>
</div>}

</>
  )
};

export default ProductDetails;
