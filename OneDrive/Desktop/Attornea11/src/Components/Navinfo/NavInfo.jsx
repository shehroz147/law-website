import React from "react";
import NavBar from "../NavBar/NavBar";
import img from "../pictures/attornea.png";
import { Link } from "react-router-dom";

export default function NavInfo() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark back fixed-top">
  <div className="container-fluid ">
    <a className="navbar-brand margin" href="#"><i className="bi bi-envelope teleinfo2">info@attornea.com</i></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <Link to = "/Signin"><li className="nav-item">
        <button className="btn signinbtn">SignIn</button>
        </li></Link>
        <Link to = "/SignUp"><li className="nav-item">
        <button className="btn signupbtn">SignUp</button>
        </li></Link>
        <NavBar/>
      </ul>
    </div>
  </div>
</nav>
  );
}
