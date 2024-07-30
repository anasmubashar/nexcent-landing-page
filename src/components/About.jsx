import Header from "./Header";

export default function About() {
  return (
    <>
      <Header />
      <div className="d-flex flex-md-row flex-column h-50 container">
        <div className="h-25 my-auto order-md-0 order-1">
          <h1 className="mb-3">Welcome to About Page</h1>
          <p className="mb-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            delectus expedita unde mollitia aspernatur aliquid tenetur animi
            eius, at, molestias aut voluptatibus deserunt doloremque minus dicta
            culpa autem facere quod?
          </p>
          <button
            className="btn btn-success text-white fw-semibold"
            style={{ width: "110px" }}
          >
            Learn More
          </button>
        </div>
        <img
          className="object-fit-contain Res-image-2 order-md-1 order-0"
          src="./development.jpg"
          alt="development"
        />
      </div>
    </>
  );
}
