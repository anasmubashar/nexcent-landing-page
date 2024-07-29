function Cards({ img, title }) {
  return (
    <div className="h-100 position-relative d-flex flex-column align-items-center Card-Size mt-md-0 mt-4">
      <img
        className=" object-fit-cover w-100 rounded-2 h-75 w-100"
        src={img}
        alt="Marketing Image"
      />
      <div
        className=" position-absolute  bottom-0 d-flex flex-column align-items-center justify-content-around silver-color z-1 rounded-3 shadow"
        style={{ width: "90%", height: "45%" }}
      >
        <h5 className="mb-0 fw-bold text-center text-black-50">{title}</h5>
        <button className=" text-success d-flex align-items-center bg-transparent border-0">
          <p className="mb-0 me-2 fw-semibold">Readmore</p>
          <img src="./Right.png" alt="" />
        </button>
      </div>
    </div>
  );
}

export default function Marketing() {
  return (
    <div className="d-flex flex-column justify-content-center Marketing-height mt-5 mb-3">
      <h1 className=" text-center mb-3">Caring is the new marketing</h1>
      <p className=" text-center mb-3 Res-image-2 mx-auto">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="d-flex flex-md-row flex-column align-items-md-baseline align-items-center justify-content-md-evenly h-100">
        <Cards
          img="./image 18 (1).png"
          title="Creating Streamlined Safeguarding Processes with OneRen"
        />
        <Cards
          img="./image 19 (1).png"
          title="What are your safeguarding responsibilities and how can you manage them?"
        />
        <Cards
          img="./image 20 (1).png"
          title="Revamping the Membership Model with Triathlon Australia"
        />
      </div>
    </div>
  );
}
