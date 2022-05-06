import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar-nav-scroll navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className=" container-fluid">
          <a className="navbar-brand" href="/" style={{ fontWeight: "bold" }}>
            Trip
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
          <div
            className="d-flex collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={{ fontWeight: "bold" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item me-2">
                <a
                  className="nav-link"
                  href="/reservation"
                  style={{ fontWeight: "bold" }}
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
