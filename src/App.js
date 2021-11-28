import React from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./components/signup.jsx";
import Signin from "./components/signin.jsx";
import Skills from "./components/skills.jsx";
import Experience from "./components/Experience";
import Personal from "./components/Personal.jsx";
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return ( <
        Router >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/signup"
        element = { < Signup / > }
        /> <
        Route exact path = "/signin"
        element = { < Signin / > }
        /> <
        Route exact path = "/skills"
        element = { < Skills / > }
        /> <
        Route exact path = "/exp"
        element = { < Experience / > }
        /> <
        Route exact path = "/edu"
        element = { < Education / > }
        /> <
        Route exact path = "/per"
        element = { < Personal / > }
        /> <
        /Routes> <
        /Router >
    );
}

export default App;