import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Foods } from "./components/Foods";
import { Footer } from "./components/Footer";
import Drinks from "./components/Drinks";

function App() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Foods/>
      <Drinks/>
      <Footer/>
    </div>
  );
}

export default App;
