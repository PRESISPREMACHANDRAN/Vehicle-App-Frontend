import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* Navbar ends */}
      <nav
        class="navbar bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">
            <Link class="navbar-brand" to="#">
              Vehicle App
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <Link class="nav-link" to="/">
                  Add Vehicle
                </Link>
                <Link class="nav-link" to="/search">
                  Search Vehicle
                </Link>
                <Link class="nav-link" to="/delete">
                  Delete Vehicle
                </Link>
                <Link class="nav-link" to="/viewAll">
                  View Vehicle
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </nav>
      {/* Navbar ends */}
    </div>
  );
};

export default Header;
