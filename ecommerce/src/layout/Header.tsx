import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [cookies,setCookie, removeCookie] = useCookies(['ecommerce']);
  console.log(cookies);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Ecommerce
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li>
          </ul>
          {Object.keys(cookies).length!==0 ? (
            <div>
              <Link className="btn btn-warning" to={`/account/${cookies.ecommerce.id}`}>
              Hello,{cookies.ecommerce.name} 
              </Link>
             <button className="btn btn-danger ms-3" onClick={()=>{
               removeCookie('ecommerce');
               removeCookie('token');
             }}>Log out</button> 
            </div>
          ) : (
            <div>
              <Link className="btn btn-warning" to="/login">
                Login
              </Link>
              <Link className="btn btn-info ms-3" to="/register">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
