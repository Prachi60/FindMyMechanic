import React from "react";
import "./Header.css";
import Logo from "../../assets/Logo.png"
import NotificationBell from "../NotificationBell";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-header shadow-sm">
      <div className="container">


        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={Logo}
            alt="Find My Mechanic"
            className="logo-img"
          />
          <span className="brand-text ms-2 fw-bold">Find My Mechanic</span>
        </a>
        <div className="location-box d-none d-lg-block ms-4">
          <input
            type="text"
            placeholder="📍 Enter your location"
            className="form-control location-input"
          />
        </div>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="d-lg-none my-3">
            <input
              type="text"
              placeholder="📍 Enter your location"
              className="form-control location-input"
            />
          </div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link ms-1 " href="#">Home</a>
            </li>

            <li className="nav-item">
              <a className="nav-link ms-1" href="#">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link ms-1" href="#">Book Mechanic</a>
            </li>

            <li className="nav-item">
              <a className="nav-link ms-1" href="#">Contact</a>
            </li>

            <li className="nav-item">
              <Link className="nav-link ms-1" to="/mechanic-dashboard">Dashboard</Link>
            </li>

            <li className="nav-item d-flex align-items-center">
              <NotificationBell />
            </li>
            <li className="nav-item dropdown">
              <button
                className="btn btn-primary dropdown-toggle ms-lg-3 px-3"
                id="loginDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Login / Signup
              </button>

              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="loginDropdown"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      window.location.href = "/login?role=customer";
                    }}
                  >
                    👤 Login as Customer
                  </button>
                </li>

                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => {
                      window.location.href = "/login?role=provider";
                    }}
                  >
                    🔧 Login as Mechanic
                  </button>
                </li>
              </ul>
            </li>


          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;


