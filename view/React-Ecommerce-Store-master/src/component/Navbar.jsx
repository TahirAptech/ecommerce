import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            LA COLLECTION
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/products" ? "active" : ""}`} to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              {/* <Link to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register</Link> */}
              <Link to="/cart" className="btn btn-outline-dark">
                <i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</Link>
              <Link to="/admin" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i> Swith to Admin</Link>
              <Link to="/login" className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1"></i> Login</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
