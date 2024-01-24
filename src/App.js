import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Foods } from "./components/Foods";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      {/* <Foods/> */}
      <Footer/>
    </div>
  );
}

export default App;
