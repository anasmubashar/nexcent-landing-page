import Unlock from "./Unlock";
import Marketing from "./Marketing";

export default function Body() {
  return (
    <>
      <div className="height-2">
        <div
          className="mt-5 d-flex flex-md-row flex-column justify-content-evenly align-items-md-center py-3"
          style={{ backgroundColor: "#F5F7FA", height: "100%" }}
        >
          <div className="h-75 ms-md-0 ms-4">
            <p className="fs-2 fw-bold mb-0">Helping a local</p>
            <p className="fs-2 fw-bold text-success mb-2">
              business reinvent itself
            </p>
            <p className="text-black-50 mb-0">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="h-75 Res-image-2 mt-md-0 mt-3 ms-md-0 ms-4">
            {/* <div className="d-fler"></div> */}
            <div className="d-flex w-100 h-50 justify-content-around mb-3">
              <div className="d-flex w-50 align-items-center">
                <img
                  className=" h-50 me-3 object-fit-scale"
                  src="./public/vector.png"
                  alt=""
                />
                <div>
                  <p className="mb-0 fs-4 fw-bold">2,245,341</p>
                  <p className="mb-0 text-black-50 fw-medium">Members</p>
                </div>
              </div>
              <div className="d-flex w-50 align-items-center">
                <img
                  style={{ height: "65%" }}
                  className="me-3 object-fit-scale"
                  src="./public/Group 2.png"
                  alt=""
                />
                <div>
                  <p className="mb-0 fs-4 fw-bold">46,328</p>
                  <p className="mb-0 text-black-50 fw-medium">Clubs</p>
                </div>
              </div>
            </div>
            <div className="d-flex w-100 h-50 justify-content-around">
              <div className="d-flex w-50 align-items-center">
                <img
                  className="me-3 object-fit-scale h-50"
                  src="./public/icon6.svg"
                  alt=""
                />
                <div>
                  <p className="mb-0 fs-4 fw-bold">828,867</p>
                  <p className="mb-0 text-black-50 fw-medium">Event Bookings</p>
                </div>
              </div>
              <div className="d-flex w-50 align-items-center">
                <img
                  className=" me-3 object-fit-scale h-50"
                  src="./public/icon7.svg"
                  alt=""
                />
                <div>
                  <p className="mb-0 fs-4 fw-bold">1,926,436</p>
                  <p className="mb-0 text-black-50 fw-medium">Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Unlock
        img={"./pana.svg"}
        title={"How to design your site footer like we did"}
      />
      <div className="silver-color mt-md-0 mt-5" style={{ height: "h-35" }}>
        <div className="d-flex flex-md-row flex-column justify-content-evenly align-items-center ">
          <img
            className=" object-fit-contain Res-image-3"
            src="./image 9.png"
            alt="Tesla Logo"
          />
          <div className="h-75 Res-text-1 ">
            <p style={{ fontSize: "15px" }}>
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3 className="text-success">Tim Smith</h3>
            <p className=" text-black-50 fw-semibold">
              British Dragon Boat Racing Association
            </p>
            <div className="d-flex justify-content-between align-items-center flex-md-nowrap flex-wrap">
              <img src="./Logo1.svg" alt="Logo" />
              <img src="./Logo2 (1).svg" alt="Logo" />
              <img src="./Logo3 (1).svg" alt="Logo" />
              <img src="./Logo4 (1).svg" alt="Logo" />
              <img src="./Logo5 (1).svg" alt="Logo" />
              <img src="./Logo6 (1).svg" alt="Logo" />
              <button className="text-success d-flex border-0 bg-transparent fw-bold align-items-center">
                <p className="me-2 mb-0">Meet all customers</p>
                <img src="./Right.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Marketing />
    </>
  );
}
