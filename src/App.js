import React from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/signup.jsx";
import Signin from "./components/signin.jsx";
import Skills from "./components/skills.jsx";
import Experience from "./components/Experience";
import Education from './components/Education.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/skills" element={<Experience />} />
        <Route exact path="/skills" element={<Education />} />


      </Routes>
    </Router >
  );
}

export default App;
