import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import Exams from "./components/Exams";
import News from "./components/News";
import Programs from "./components/Programs";
import Provinces from "./components/Provinces";
import Scholarship from "./components/Scholarship";
import School from "./components/School";
import Login from "./components/login";
import Register from "./components/register";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exams" element={<Exams />} />
          <Route path="/school" element={<School />} />
          <Route path="/news" element={<News />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/provinces" element={<Provinces />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
