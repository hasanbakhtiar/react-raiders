import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import slugify from 'slugify'
import Swal from 'sweetalert2';

const SingleProduct = ({propItems}) => {
  const { addItem } = useCart();
  return (
    <div className='col-12 col-sm-6 col-md-4'>
                <div className="card">
                <img src={propItems.image} height={300} style={{objectFit:"contain"}} className="card-img-top" alt={propItems.title} />
                <div className="card-body">
                    <h5 className="card-title">{propItems.title.slice(0,10)}...</h5>
                    <h6 className="card-title">${propItems.price}</h6>
                    <p className="card-text">{propItems.description.slice(0,30)}...</p>
                    <Link to={`/products/${slugify(propItems.title,{lower:true})}`} className="btn btn-dark me-3">More details</Link>
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
                      addItem(propItems)
                    }} className="btn btn-warning">Add to cart</button>
                </div>
                </div>

    </div>
  )
}

export default SingleProduct