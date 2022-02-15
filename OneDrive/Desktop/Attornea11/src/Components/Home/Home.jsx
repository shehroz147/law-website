import React from "react";
import HomePage2 from './HomePage2';
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="homediv">
      <div className="text">
        <h1 className="t1">Only place to find a Lawyer In Pakistan</h1>
        {/* <h1 className="t2"></h1> */}
        <div className="search">
        <label htmlFor="search"><input type="text" name="search" placeholder="Search" /></label>
        <button className="btn ">Search</button>
        </div>
        <div className="buttons">
          <Link to = "/makeadocument"><button className="btn btnhome">Make A Document</button></Link>
          <Link to = "/askaquestion"><button className="btn btnhome">Ask A question</button></Link>
          <Link to = "/talktolawyer"><button className="btn btnhome">Talk to a lawyer</button></Link>
          <button className="btn btnhome">hire A Lawyer</button>
          </div>
        </div>
    </div>
  );
}
