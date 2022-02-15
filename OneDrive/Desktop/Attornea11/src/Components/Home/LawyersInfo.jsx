import React from "react";
import Images from "./Images";
import L1 from "../pictures/L1.jpg";
import L2 from "../pictures/L2.jpg";
import L3 from "../pictures/L3.jpg";
import L4 from "../pictures/L4.jpg";
import L5 from "../pictures/L5.jpg";
import L6 from "../pictures/L6.jpg";
import L7 from "../pictures/L7.jpg";
import L8 from "../pictures/L8.jpg";

export default function LawyersInfo() {
  const LayersData = [
    {
      Lno: "01",
      name: "Civil Lawyers",
      Description:
        "Attornea provides services in matter concerning Civil Law such as acquisition or protection of property",
      img: L1,
    },
    {
      Lno: "02",
      name: "Family Lawyers",
      Description:
        "Attornea offers assistance on legal procedures concerning the adoption process, divorce, child custody,",
      img: L2,
    },
    {
      Lno: "03",
      name: "Taxation Lawyers",
      Description:
        "Attornea provides assistance in various matters relating to registration and litigation of taxation law",
      img: L3,
    },
    {
      Lno: "04",
      name: "Transactional work",
      Description:
        "Attornea offers assistance in all the legal and transactional work including registration of companies, firms,",
      img: L4,
    },
    {
      Lno: "05",
      name: "Visa & immigration ",
      Description:
        "Attornea provides services in matters relating to visa & immigration applications, filling of appeals against visa application rejection.",
      img: L5,
    },
    {
      Lno: "06",
      name: "pro-bono services",
      Description:
        "Attornea has also developed a dedicated team of lawyers that represents the poor and needy litigants",
      img: L6,
    },
    {
      Lno: "07",
      name: "intilectual Property",
      Description:
        "Attornea has also developed a dedicated team of lawyers that represents the poor and needy litigants",
      img: L7,
    },
    {
      Lno: "08",
      name: "Employement/Lab",
      Description:
        "Attornea has also developed a dedicated team of lawyers that represents the poor and needy litigants",
      img: L8,
    },
  ];

  return (
    <div className="lawyersinfo">
      <div className="lawyersText">
        <h1>
          _____ <span>Get Services in the Following Fields</span>
        </h1>
      </div>
        <Images lawyer={LayersData} />
      
        </div>
  );
}
