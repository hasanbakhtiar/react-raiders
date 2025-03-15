import React from 'react'

const Contact = () => {
  return (
    <div className='d-flex align-items-center justify-content-center flex-column'>
        <p className='h1 my-5'>Contact Us</p>
                <form className="col-5">
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Surname</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Phone number</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input type="text" className="form-control"  />
                </div>
                <div className="mb-3">
                    <label  className="form-label">Message</label>
                    <input type="text" className="form-control"  />
                </div>
                
                
            
                <button type="submit" className="btn btn-warning">Send</button>
                </form>

    </div>
  )
}

export default Contact