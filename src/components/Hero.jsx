export default function Hero() {
  return (
    <div className=" silver-color d-flex flex-md-row flex-column justify-content-md-around Hero-Size">
      <div className=" d-flex flex-column justify-content-center 50 order-md-0 order-1 m-md-0 m-4">
        <p className="fs-1 fw-bold mb-0">Lessons And Insights</p>
        <p className="fs-1 fw-bold text-success mb-0">from 8 years</p>
        <p className="">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button
          className="btn btn-success text-white fw-bold"
          style={{ width: "100px" }}
        >
          Register
        </button>
      </div>
      <img
        className=" object-fit-contain my-auto order-md-1 order-0 Hero-Image-Size mx-md-0 mx-auto"
        src="./Illustration.png"
        alt=""
      />
    </div>
  );
}
