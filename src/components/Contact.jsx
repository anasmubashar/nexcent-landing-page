import { Alert } from "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Header";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <Header />
      <h1 className=" text-center mt-5 mb-5">Contact Us</h1>
      <form className="container mx-auto d-flex flex-column align-items-sm-center">
        <label className="fw-bold" htmlFor="#name">
          Full Name
        </label>
        <input
          className="form-size mb-3"
          type="text"
          name="FullName"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className=" fw-bold" htmlFor="#Email">
          Email Address
        </label>
        <input
          className="form-size mb-3"
          type="email"
          name="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="Email"
          required
        />
        <label className="  fw-bold" htmlFor="#desc">
          Your Message
        </label>
        <textarea
          className="form-size mb-3"
          name="desc"
          id="desc"
          rows="3"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          className="btn btn-success"
          onSubmit={(e) => {
            e.preventDefault();

            alert(`thanks ${name} for contacting us`);
          }}
          style={{ width: "100px" }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
