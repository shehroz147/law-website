import React from "react";
import HeadFooter from "./HeadFooter";

import Mapp from "./Mapp";
import img from '../pictures/attornea.png';

export default function Fotter() {
//   var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// mapboxgl.accessToken = 'pk.eyJ1IjoibmF2ZWVkLTEyIiwiYSI6ImNreXQ5Z250bzFiNDYycG8zcXB2OWlvbjcifQ.iE_-5eZnXuLGN9qwEukcng';
// var map = new mapboxgl.Map({
// container: 'map1',
// style: 'mapbox://styles/mapbox/streets-v11'
// });
// map.addControl(new mapboxgl.NavigationControl());

  return (
    <div className="footer">
    <HeadFooter/>
      <div className="containee">
      <div className="ff">
          <img
            src={img}
            alt=""
            width={300}
          />
          <p style={{color:"midnightblue"}}>
            To create legal awareness among the people and to make the legal
            services flexible, accessible for everyone.
          </p>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#">
            <i className="bi bi-youtube"></i>
          </a>
        </div>
        <div className=" ff2">
            <h2>Quick Links</h2>
            <h3><i className="bi bi-caret-right"></i>Talk To A Lawyer</h3>
            <h3><i className="bi bi-caret-right"></i>Ask A Question</h3>
            <h3><i className="bi bi-caret-right"></i>B-LAWGS</h3>
            <h3><i className="bi bi-caret-right"></i>Write For Us</h3>
        </div>
        <div className=" ff2">
            <h2>Contact</h2>
            <h3><i className="bi bi-envelope-fill"></i>info@attornea.com</h3>
            <h3><i className="bi bi-telephone-fill"></i>0335-4655480</h3>
            <h3 className="small"><i className="bi bi-geo-alt-fill"></i>Building No 977 Block J-ll Johar town, Lahore </h3>
        </div>
         </div>      
        <hr class="hr-4"/>
        <h2 className="fttext">Copyright © 2021, Designed & Developed by NextBit Creatives (PVT) Ltd </h2>
    </div>
  );
}
