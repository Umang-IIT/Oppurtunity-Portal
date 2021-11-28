import React from 'react';
import Navbar from './components/Navbar.jsx';
import Experience from "./components/Experience";
import Education from './components/Education.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Experience />
      <Education/>
    </div>
  );
}

export default App;
