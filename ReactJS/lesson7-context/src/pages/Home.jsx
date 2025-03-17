import { useContext } from 'react';
import logo from '../assets/img/logo-png.png'
import { ProductContext } from '../context/ProductContext';
import Slider from "react-slick";
import SingleProduct from './shop/SingleProduct';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import Swal from 'sweetalert2';
import { useCart } from 'react-use-cart';
const Home = () => {

    const [product] = useContext(ProductContext);
      const { addItem } = useCart();
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  return (
<div className="px-4 py-5 my-5 text-center">
  <img className="d-block mx-auto mb-4" style={{objectFit:"contain"}} src={logo} alt width={272}  />
  <h1 className="display-5 fw-bold text-body-emphasis">Welcome to eShop</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">At eShop, we’re all about bringing you the best Nintendo gaming experiences. Whether you're looking for the latest Switch titles, fan-favorite classics, or exclusive Nintendo games, we’ve got it all. Dive into our handpicked collection of must-have Nintendo games, each offering hours of fun, adventure, and unforgettable moments. Your next Nintendo adventure starts here!</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <Link to="/shop" className="btn btn-warning btn-lg px-4 gap-3">Get product</Link>
    </div>
  </div>
  <p className='h1 my-5'>Latest Products</p>
  <Slider {...settings}>
  {product.slice(0,4).map(item=>(
      <div className='col-12 col-sm-6 col-md-4'>
      <div className="card">
      <img src={item.image} height={300} style={{objectFit:"contain"}} className="card-img-top" alt={item.title} />
      <div className="card-body">
          <h5 className="card-title">{item.title.slice(0,10)}...</h5>
          <h6 className="card-title">${item.price}</h6>
          <p className="card-text">{item.description.slice(0,30)}...</p>
          <Link to={`/products/${slugify(item.title,{lower:true})}`} className="btn btn-dark me-3">More details</Link>
                            <button onClick={()=>{
                              Swal.fire({
                                title: "Game added to cart!",
                                width: 600,
                                padding: "3em",
                                color: "#716add",
                                background: "#fff url(/images/trees.png)",
                                backdrop: `
                                  rgba(0,0,123,0.4)
                                  left top
                                  no-repeat
                                `
                              });
                              addItem(item)
                            }} className="btn btn-warning">Add to cart</button>
      </div>
      </div>

</div>
  ))}
    </Slider>

</div>

  )
}

export default Home