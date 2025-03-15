import logo from '../assets/img/logo-png.png'

const Home = () => {
  return (
<div className="px-4 py-5 my-5 text-center">
  <img className="d-block mx-auto mb-4" style={{objectFit:"contain"}} src={logo} alt width={272}  />
  <h1 className="display-5 fw-bold text-body-emphasis">Welcome to eShop</h1>
  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">At eShop, we’re all about bringing you the best Nintendo gaming experiences. Whether you're looking for the latest Switch titles, fan-favorite classics, or exclusive Nintendo games, we’ve got it all. Dive into our handpicked collection of must-have Nintendo games, each offering hours of fun, adventure, and unforgettable moments. Your next Nintendo adventure starts here!</p>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" className="btn btn-warning btn-lg px-4 gap-3">Get product</button>
    </div>
  </div>
</div>

  )
}

export default Home