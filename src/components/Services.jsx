import Header from "./Header";

export default function Services() {
  return (
    <>
      <Header />
      <h1 className=" text-center mt-5 mb-5">Our Services</h1>
      <div className="container  d-flex flex-wrap gap-3 justify-content-center">
        <div className="h-25 Service-Cards border rounded-2 border-black">
          <img
            className="object-fit-contain h-75 w-100 border border-black border-top-0 border-start-0 border-end-0"
            src="./seo.jpg"
            alt="development"
          />
          <div className="p-2 h-25 w-100">
            <h3>Search Engine Optimization</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              inventore iste temporibus corporis, ullam est! Distinctio
            </p>
            <button className="btn btn-success">See More</button>
          </div>
        </div>
        <div className="h-25 Service-Cards border rounded-2 border-black">
          <img
            className=" object-fit-contain h-75 w-100 border border-black border-top-0 border-start-0 border-end-0"
            src="./app development.jpg"
            alt="development"
          />
          <div className="p-2">
            <h3>App Development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              inventore iste temporibus corporis, ullam est! Distinctio
            </p>
            <button className="btn btn-success">See More</button>
          </div>
        </div>
        <div className="h-25 Service-Cards border rounded-2 border-black">
          <img
            className="object-fit-contain h-75 w-100 border border-black border-top-0 border-start-0 border-end-0"
            src="./Full-Stack-Developer.jpg"
            alt="development"
          />
          <div className="p-2">
            <h3>Web Development</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
              inventore iste temporibus corporis, ullam est! Distinctio
            </p>
            <button className="btn btn-success">See More</button>
          </div>
        </div>
      </div>
    </>
  );
}
