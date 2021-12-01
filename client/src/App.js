import React from "react";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/signup.jsx";
import Signin from "./components/signin.jsx";

// import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import Form from "./components/resume/Form.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />{" "}
        <Route path="/" element={<Form />} />{" "}
        <Route exact path="/signin" element={<Signin />} />{" "}
      </Routes>{" "}
    </Router>
  );
}

export default App;
