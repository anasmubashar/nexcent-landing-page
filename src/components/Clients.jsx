import Unlock from "./Unlock";

function Contents({ img, title, description, alt }) {
  return (
    <div className="d-flex flex-column justify-content-evenly align-items-center Card-width">
      <img src={img} alt={alt} />
      <p className="fs-3 fw-bold text-center">{title}</p>
      <p className="text-center">{description}</p>
    </div>
  );
}

export default function Clients() {
  return (
    <>
      <div className="d-flex flex-column mt-5">
        <p className="fs-2 fw-bold text-center">Our Clients</p>
        <p className="text-center text-black-50 fw-medium">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="d-flex justify-content-around mb-5">
          <img src="./public/Logo.svg" alt="" />
          <img src="./public/Logo2.svg" alt="" />
          <img src="./public/Logo3.svg" alt="" />
          <img src="./public/Logo4.svg" alt="" />
          <img src="./public/Logo5.svg" alt="" />
          <img src="./public/Logo6.svg" alt="" />
        </div>
        <p className="fs-2 text-center fw-bold">
          Manage your entire community <br /> in a single system
        </p>
        <p className="text-center text-black-50 fw-medium">
          Who is Nextcent suitable for?
        </p>
        <div className="d-flex flex-md-row flex-column align-items-md-baseline align-items-center justify-content-md-evenly mt-4">
          <Contents
            img={"./public/icon.svg"}
            title={"Membership Organisations"}
            description={
              "Our membership management software provides full automation of membership renewals and payments"
            }
            alt={"Community-icon"}
          />
          <Contents
            img={"./public/icon2.svg"}
            title={"National Associations"}
            description={
              "Our membership management software provides full automation of membership renewals and payments"
            }
            alt={"Building-icon"}
          />
          <Contents
            img={"./public/icon3.svg"}
            title={"Clubs And Groups"}
            description={
              "Our membership management software provides full automation of membership renewals and payments"
            }
            alt={"Club-icon"}
          />
        </div>
      </div>
      <Unlock
        img={"./public/Frame 35.png"}
        title={"The unseen of spending three years at Pixelgrade"}
      />
    </>
  );
}
