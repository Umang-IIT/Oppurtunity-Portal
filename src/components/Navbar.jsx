import React from 'react';
import "./Navbar.css";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Oppurtunity Portal</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Intenship Profile
                            </a>
                            <div style={{width: "35vw", paddingLeft: "1.5vw"}} className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div className="row">
                                    <a href="#" className="navitemStyle col-5">Computer Science Internship</a>
                                    <a href="#"  className="navitemStyle col-5">Marketing Internship</a >
                                </div>
                                <div className="row">
                                    <a href="#" className="navitemStyle col-5">Finance Internship</a>
                                    <a href="#"  className="navitemStyle col-5">HR Internship</a >
                                </div>
                                <div className="row">
                                    <a href="#" className="navitemStyle col-5">Electronics Internship</a>
                                    <a href="#"  className="navitemStyle col-5">Content Writing Internship</a >
                                </div>
                            </div>                        
                        </li>
                    </ul>
                    
                    <div style={{marginRight:"8vw"}} className="d-flex">
                        <button className="btn btn-outline-primary mx-3">Log In</button>
                        <div class="dropdown">
                            <button style={{color: "white"}} class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Register
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">As a student</a></li>
                                <li><a class="dropdown-item" href="#">As an employer</a></li>
                            </ul>
                        </div>
                    </div>                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;