import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
              <Route path="/login" element={<Login />}/>
                <Route path="/signup" element={<Signup />}/>
           
      </Routes>
    </div>
  );
};

export default App;
