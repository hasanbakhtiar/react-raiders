import React from 'react'

const SingleProduct = ({propItems}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
                <div className="card">
                <img src={propItems.image} height={300} style={{objectFit:"contain"}} className="card-img-top" alt={propItems.title} />
                <div className="card-body">
                    <h5 className="card-title">{propItems.title.slice(0,10)}...</h5>
                    <h6 className="card-title">${propItems.price}</h6>
                    <p className="card-text">{propItems.description.slice(0,30)}...</p>
                    <a href="#" className="btn btn-dark me-3">More details</a>
                    <a href="#" className="btn btn-warning">Add to cart</a>
                </div>
                </div>

    </div>
  )
}

export default SingleProduct