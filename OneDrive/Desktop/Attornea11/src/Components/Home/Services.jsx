import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import document from "../pictures/document.png";
import question from "../pictures/askQuestion.png";
import talk from "../pictures/talk.png";
import hire from "../pictures/gavel.png";

export default function Services() {
  return (
    <div className=" services">
      <h1>
        Our <span>Services</span>
      </h1>
      <div className="row containee">
        <div className="col-lg-3">
          {/* <h2>Make A Document</h2> */}
          <img src={document} alt="Document" />
          <div className="box">
            <p>Create a Legal Document using a pre built Template</p>
            <button className="btn">
              <i className="bi bi-arrow-right"> Learn More</i>
            </button>
          </div>
        </div>
        <div className="col-lg-3">
          {/* <h2>Ask A Question</h2> */}
          <img src={question} alt="Document" />
          <div className="box">
            <p>
              Ask any question from our Expert Lawyers and get there help right
              away
            </p>
            <button className="btn">
              <i className="bi bi-arrow-right"> Learn More</i>
            </button>
          </div>
        </div>

        <div className="col-lg-3">
          {/* <h2>Hire A Lawyer</h2> */}
          <img src={hire} alt="Document" />
          <div className="box">
            <p>Hire a Lawyer according to your need and get their expertise</p>
            <button className="btn">
              <i className="bi bi-arrow-right"> Learn More</i>
            </button>
          </div>
        </div>
        <div className="col-lg-3">
          {/* <h2>Talk to a lawyer</h2> */}
          <img src={talk} alt="Document" />
          <div className="box">
            <p>Talk to an Expert Lawyer and get your issues resolved</p>
            <button className="btn">
              <i className="bi bi-arrow-right"> Learn More</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
