import "./App.css";
import React from "react";
import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/Error";
import Mail from "./component/Mail";
import Insta from "./component/Insta";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <Home /> */}
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />}>
            <Route path="/insta" element={<Insta />} />
            <Route path="/mail" element={<Mail />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
        {/* {console.log("jsx")} */}
      </div>
    </Router>
  );
}

export default App;
