import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Navbar from "./pages/Navbar";
import Presonal from "./pages/Presonal";
import Work_skill from "./pages/Work_skill";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="presonal" element={<Presonal />} />
          <Route path="Skill" element={<Work_skill />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
