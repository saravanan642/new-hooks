import React from "react";
import Header from "./Compontents/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Compontents/Home";
import About from "./Compontents/About"
import Contact from "./Compontents/Contact"

function App() {
  return (
    <div className="App">
      <Header />


      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </div>
  );
}

export default App;
