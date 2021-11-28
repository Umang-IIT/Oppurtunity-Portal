import React from 'react';
import Navbar from './components/Navbar.jsx';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/signup.jsx";
import Signin from "./components/signin.jsx";
import Skills from "./components/skills.jsx";
=======
import Personal from "./components/Personal.jsx";
>>>>>>> Stashed changes
import Experience from "./components/Experience";
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

function App() {
<<<<<<< Updated upstream
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/skills" element={<Skills />} />
        <Route exact path="/exp" element={<Experience />} />
        <Route exact path="/edu" element={<Education />} />


      </Routes>
    </Router >
  );
=======
    return ( <
        div className = "App" >
        <
        Navbar / >
        <
        Personal / >
        <
        Experience / >
        <
        Education / >
        <
        /div>
    );
>>>>>>> Stashed changes
}

export default App;