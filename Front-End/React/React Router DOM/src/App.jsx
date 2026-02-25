import React from "react";
import Navbar from "./components/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Course from "./pages/Course";
import Kodex from "./pages/Kodex";
import Kodr from "./pages/Kodr";
import AllCourses from "./pages/AllCourses";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="main">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />}>
          <Route path="/course" element={<AllCourses/>} />
          <Route path="/course/kodex" element={<Kodex />} />
          <Route path="/course/kodr" element={<Kodr />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
