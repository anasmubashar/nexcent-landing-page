export default function Footer() {
  return (
    <>
      <div className="h-25 silver-color d-flex flex-column align-items-center pt-4 mt-5 pb-4">
        <h1 className="text-center w-50 mb-5">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="d-flex align-items-center btn btn-success">
          <p className="mb-0 me-2 fw-semibold">Get a Demo</p>
          <img src="./Right-white.png" alt="" />
        </button>
      </div>
      <div
        className="d-flex flex-md-row flex-column justify-content-md-center align-items-md-center height"
        style={{ backgroundColor: "#263238" }}
      >
        <div
          className="w-25 d-flex flex-column justify-content-around m-md-0 m-3"
          style={{ height: "60%" }}
        >
          <img style={{ width: "80%" }} src="./Logo1.png" alt="" />
          <p className="text-white">
            Copyright © 2020 Nexcent ltd. <br /> All rights reserved
          </p>
          <div
            className="d-flex justify-content-between"
            style={{ width: "60%" }}
          >
            <img src="./Social Icons.png" alt="Social Media Icon" />
            <img src="./Social Icons1.png" alt="Social Media Icon" />
            <img src="./Social Icons2.png" alt="Social Media Icon" />
            <img src="./Social Icons3.png" alt="Social Media Icon" />
          </div>
        </div>
        <div
          className=" h-75 d-flex flex-md-row flex-column justify-content-around"
          style={{ width: "65%" }}
        >
          <div className="d-flex flex-column m-md-0 m-3">
            <p className="text-white fw-bold fs-3">Company</p>
            <div
              className="d-flex flex-column text-white text-light"
              style={{ fontSize: "16px" }}
            >
              <p className="mb-1">About Us</p>
              <p className="mb-1">Blog</p>
              <p className="mb-1">Contact Us</p>
              <p className="mb-1">Pricing</p>
              <p className="mb-1">Testimonials</p>
            </div>
          </div>
          <div className="d-flex flex-column m-md-0 m-3">
            <p className="text-white fw-bold fs-3">Support</p>
            <div
              className="d-flex flex-column text-white text-light"
              style={{ fontSize: "16px" }}
            >
              <p className="mb-1">Help center</p>
              <p className="mb-1">Terms of service</p>
              <p className="mb-1">Legal</p>
              <p className="mb-1">Privacy policy</p>
              <p className="mb-1">Status</p>
            </div>
          </div>
          <div className="d-flex flex-column m-md-0 m-3">
            <p className="text-white fw-bold fs-3">Stay up to date</p>
            <div
              className="d-flex"
              // style={{ fontSize: "16px" }}
            >
              <input
                type="Email"
                className=" border-0 rounded-start-2 p-2 fw-semibold"
                placeholder="Your Email Address"
                style={{
                  backgroundColor: "#515b60",
                  color: "#D9DBE1",
                  fontSize: "14px",
                }}
              />
              <div
                className="rounded-end-2 d-flex justify-content-center align-items-center"
                style={{ width: "30px", backgroundColor: "#515b60" }}
              >
                <img src="./send.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
