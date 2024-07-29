import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Clients from "./components/Clients.jsx";
import Body from "./components/Body.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Body />
      <Footer />
    </>
  );
}

export default App;
