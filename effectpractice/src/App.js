import "./App.css";
import React from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<Error />} />
      </Routes>
      {/* {console.log("jsx")} */}
    </div>
  );
}

export default App;
