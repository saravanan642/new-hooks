import React from "react";
import Header from "./Compontents/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Compontents/Home";

function App() {
  return (
    <div className="App">
      <Header />


      <Routes>
        <Route path="/home" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
