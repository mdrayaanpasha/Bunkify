import React from "react";
import { BrowserRouter as Router, Route, Routes, Form } from "react-router-dom";
import Result from "./components/result";  // Make sure the path to Result component is correct
import Home from "./components/Home";
import FForm from "./components/form";
import How from "./components/how";
import About from "./components/about";
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the result page with dynamic segments */}
        <Route path="/" element={<Home/>}/>
        <Route path="/result/:school/:className/:shift/:year/:subject/:percentage" element={<Result />} />
        <Route path="/form" element={<FForm/>}/>
        <Route path="/how" element={<How/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  );
}
