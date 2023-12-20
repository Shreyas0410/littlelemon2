import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Reserve from "./pages/Reserve";
function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/menu" element = {<Menu />} />
        <Route path = "/reserve" element = {<Reserve />} />
      </Routes>
    </>
  );
}

export default App;
