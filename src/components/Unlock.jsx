export default function Unlock({ img, title }) {
  return (
    <div className="d-flex flex-md-row flex-column justify-content-center align-items-center mt-5 mb-3 height">
      <img
        className=" object-fit-xl-contain object-fit-fill Res-image"
        style={{ height: "100%" }}
        src={img}
        alt="phone unlock illustration"
      />
      <div className="d-flex flex-column h-75 Res-text justify-content-between">
        <h1 className="mt-md-0 mt-3 mb-3">{title}</h1>
        <p className=" text-black-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button
          className="btn btn-success text-white fw-semibold"
          style={{ width: "120px" }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
