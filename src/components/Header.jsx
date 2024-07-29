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
            <p className="nav-item nav-link me-3 mb-0">Home</p>
            <p className="nav-item nav-link me-3 mb-0">Service</p>
            <p className="nav-item nav-link me-3 mb-0">Feature</p>
            <p className="nav-item nav-link me-3 mb-0">Product</p>
            <p className="nav-item nav-link me-3 mb-0">Testimonials</p>
            <p className="nav-item nav-link mb-0">FAQ</p>
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
          <p className="me-2 mb-0">Home</p>
          <p className="me-2 mb-0">Service</p>
          <p className="me-2 mb-0">Feature</p>
          <p className="me-2 mb-0">Product</p>
          <p className="me-2 mb-0">Testimonials</p>
          <p className="mb-0">FAQ</p>
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
