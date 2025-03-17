import React from "react";
import logo from "../assets/img/logo-png.png";
import { Link, NavLink } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { useCart } from "react-use-cart";

const Header = () => {
  const {totalItems} = useCart();
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
            <Link to="/cart" class="btn btn-warning position-relative ms-3">
              <IoMdCart size={20} />

              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {totalItems}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
