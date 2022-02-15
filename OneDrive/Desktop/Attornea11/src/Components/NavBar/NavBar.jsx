import React from "react";
import "./Style.css";
import img from "../pictures/attornea.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
	<nav className="navbar navbar-expand-xlg sticky-top ">
	<div className="container-fluid">
	  <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon black"><i className="bi bi-list"></i> </span>
		
	  </button>
	  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		<ul className="navbar-nav me-auto mb-2 mb-lg-0">
		  <Link to = "/"><li className="nav-item">
			<a className="nav-link active" aria-current="page" href="#" style={{color:"midnightblue"}}>HOME</a>
		  </li></Link>
		  <li className="nav-item dropdown">
			<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"midnightblue"}}>
			  SERVICES
			</a>
			<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
			  <Link to = "/makeadocument"><li><a className="dropdown-item" href="#">Make A Document</a></li></Link>
			  <Link to = "/askaquestion"><li><a className="dropdown-item" href="#">Ask A Question</a></li></Link>
			  <Link to = "/talktolawyer"><li><a className="dropdown-item" href="#">Talk To A lawyer</a></li></Link>
			  <li><a className="dropdown-item" href="#">Hire A Lawyer</a></li>
			</ul>
		  </li>
   
		  <li className="nav-item dropdown">
		  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"midnightblue"}}>
			B-LAWGS
		  </a>
		  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
			<li><a className="dropdown-item" href="#">How To Articles</a></li>
			<li><a className="dropdown-item" href="#">Know Your Rights</a></li>
			<li><a className="dropdown-item" href="#">New And Analysis</a></li>
		  </ul>
		</li>
		<li className="nav-item dropdown">
		  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"midnightblue"}}>
			E-LIBRARY
		  </a>
		  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
			<li><a className="dropdown-item" href="#">Statutes/laws</a></li>
			<li><a className="dropdown-item" href="#">Judgements</a></li>
			<li><a className="dropdown-item" href="#">Legal Drafting</a></li>
		  </ul>
		</li>
		<li className="nav-item">
		<a className="nav-link" href="#" style={{color:"midnightblue"}}>V-LAWGS</a>
	  </li>
		</ul>
		
	  </div>
	</div>
  </nav>
  );
}

// <nav className="navbar navbar-expand-lg sticky-top nav bg-light">
//   <div className="container-fluid ">
//     <a className="navbar-brand" href="#"><img src={img} alt=""  width = {120}/></a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse fonts" id="navbarNavDropdown">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link home" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link AboutUs" href="#">About Us</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle Services" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Services
//           </a>
//           <ul className="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a className="dropdown-item " href="#">Make A Document</a></li>
//             <li><a className="dropdown-item " href="#">Ask A Question</a></li>
//             <li><a className="dropdown-item " href="#">Talk to a Lawyer</a></li>
//             <li><a className="dropdown-item " href="#">Hire a Lawyer</a></li>
//           </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             b-Lawgs
//           </a>
//           <ul className="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a className="dropdown-item " href="#">How To Articles</a></li>
//             <li><a className="dropdown-item " href="#">Know your Rights</a></li>
//             <li><a className="dropdown-item " href="#">News And Analysis</a></li>
//             </ul>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             E-library
//           </a>
//           <ul className="dropdown-menu menu" aria-labelledby="navbarDropdownMenuLink">
//             <li><a className="dropdown-item " href="#">Statutes/laws</a></li>
//             <li><a className="dropdown-item " href="#">Judements</a></li>
//             <li><a className="dropdown-item " href="#">Legal Drafting</a></li>
//             </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link Vlawgs" href="#">V-Lawgs</a>
//         </li>
//         <button className="btn signinbtn">Sign In</button>
//         <button className="btn signupbtn">Sign Up</button>
//       </ul>
//     </div>
//   </div>
// </nav>
