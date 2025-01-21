import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Navbar from "./pages/Navbar";
import Presonal from "./pages/Presonal";
import Work_skill from "./pages/Work_skill";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";

import React, { useState } from "react";
import Countvalue from "./pages/Countvalue";

export default function App() {
  const [toggle, setToggle] = useState(false); // State for toggle (false for light mode, true for dark mode)

  const toggleHandler = () => {
    setToggle(!toggle); // Toggle the state
  };

  return (
    <div className={`bg-[--theme-color] ${toggle ? "dark" : ""}`}>
      <BrowserRouter>
        <Header />
        <Navbar toggle={toggle} toggleHandler={toggleHandler} /> {/* Pass toggle state and handler */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="presonal" element={<Presonal />} />
          <Route path="Skill" element={<Work_skill />} />
          <Route path="countvalue" element={<Countvalue />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
