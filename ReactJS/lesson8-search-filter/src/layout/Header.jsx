import React, { useContext, useState } from "react";
import logo from "../assets/img/logo-png.png";
import { Link, NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useCart } from "react-use-cart";
import { FaSearch } from "react-icons/fa";
import { ProductContext } from "../context/ProductContext";
import slugify from "slugify";
const Header = () => {
  const [product] = useContext(ProductContext);
  const { totalItems } = useCart();
  const [keyword,setKeyword] = useState("");

  
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img width={70} src={logo} alt="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex">
            <Link className="btn btn-outline-warning" to="/shop">
              Shop now
            </Link>
            <Link to="/cart" className="btn btn-warning position-relative ms-3">
              <IoMdCart size={20} />

              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            </Link>
          </div>

          <div>
            <button
              type="button"
              className="btn btn-warning ms-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <FaSearch />
            </button>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5">Search</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>
                  <div className="modal-body">
                    <div className="input-group mb-3">
                      <input
                      onChange={e=>setKeyword(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Enter product title or name"
                      />
                      <button className="btn btn-warning" type="button">Search</button>
                    </div>
              <ul className="list-group">
                {!keyword?"":product.filter(p=>p.title.toLocaleLowerCase().includes(keyword)).map((item,index)=>(
                  <span data-bs-dismiss="modal"><Link to={`products/${slugify(item.title,{lower:true})}`} className="list-group-item" key={index}><img src={item.image} width={70} alt={item.title} /> {item.title}</Link></span>
                ))}
              </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
