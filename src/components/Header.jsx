import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar silver-color">
      <div className="container-fluid d-flex justify-content-between justify-content-md-around align-items-center mt-md-3">
        <img
          className="img-fluid h-25 navbar-brand"
          src="Logo.png"
          alt="logo"
        />
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ">
            <Link to="/" className="">
              <p className="nav-item nav-link me-3 mb-0">Home</p>
            </Link>
            <Link to="/About" className="">
              <p className="nav-item nav-link me-3 mb-0">About</p>
            </Link>
            <Link to="/Services" className="">
              <p className="nav-item nav-link me-3 mb-0">Services</p>
            </Link>
            <Link to="/Contact" className="">
              <p className="nav-item nav-link me-3 mb-0">Contact</p>
            </Link>
            {/* <Link to="/" className="">
              <p className="nav-item nav-link me-3 mb-0">Testimonials</p>
            </Link> */}
          </div>
          <div className="navbar-nav">
            <button
              className="btn btn-outline-success  mt-3  "
              style={{ width: "90px" }}
            >
              Login
            </button>
            <button className="btn btn-success mt-3 " style={{ width: "90px" }}>
              Sign up
            </button>
          </div>
        </div>
        <div className="d-md-flex d-none">
          <Link to="/" className="nav-item nav-link">
            <p className="me-4 mb-0 fs-5">Home</p>
          </Link>

          <Link to="/About" className="nav-item nav-link">
            <p className="me-4 mb-0 fs-5">About</p>
          </Link>
          <Link to="/Services" className="nav-item nav-link">
            <p className="me-4 mb-0 fs-5">Service</p>
          </Link>
          <Link to="/Contact" className="nav-item nav-link">
            <p className="me-4 mb-0 fs-5">Contact</p>
          </Link>
          {/* <p className="me-2 mb-0">Testimonials</p> */}
        </div>
        <div className="d-md-flex d-none">
          <button
            className="btn btn-outline-success  me-2 "
            style={{ width: "90px" }}
          >
            Login
          </button>
          <button className="btn btn-success " style={{ width: "90px" }}>
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
