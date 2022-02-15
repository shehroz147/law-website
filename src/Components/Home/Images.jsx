import React from "react";

export default function Images(props) {
    console.log("props : ", props);
  return(
        <div className="container">
        <div className="grid row">
        {   
            props.lawyer.map((ll)=>(
                <div className="lawyer col-lg-4">
                <h4>{ll.Lno}</h4>
                <img src={ll.img} alt="" width={400}/>
                <div className="info">
                    <h2>{ll.name}</h2>
                    <p className="white">{ll.Description}</p>
                    <button className="btn btnhome3">Book A Lawyer</button>
                </div>
                </div>
            ))
        }
      </div>
      </div>
      )
    }
    // <div className="grid row">
    //     <ul class="adsaikat-flip-demo col-md-6">
    //     <li>
    //     <h2 className="hh">{props.lawyer[0].name}</h2>
    //         <figure>
    //             <img src={props.lawyer[0].img} alt="hover-image"/>
    //             <figcaption>
    //                 <h2>{props.lawyer[0].Lno}</h2>
    //                 <p>{props.lawyer[0].Description}</p>
    //             </figcaption>
    //         </figure>
    //     </li>
    // </ul>
    // <ul className="adsaikat-flip-demo col-md-6">
    //     <li>
    //     <h2 className="hh">{props.lawyer[1].name}</h2>
    //     <figure>
    //         <img src={props.lawyer[1].img} alt="hover-image"/>
    //         <figcaption>
    //             <h2>{props.lawyer[1].Lno}</h2>
    //             <p>{props.lawyer[1].Description}</p>
    //         </figcaption>
    //     </figure>
    //     </li>
    // </ul>
    // </div>
    // <div className="grid row">
    //     <ul className="adsaikat-flip-demo col-md-6">
    //     <li>
    //     <h2 className="hh">{props.lawyer[3].name}</h2>
    //     <figure>
    //         <img src={props.lawyer[3].img} alt="hover-image"/>
    //         <figcaption>
    //             <h2>{props.lawyer[3].Lno}</h2>
    //             <p>{props.lawyer[3].Description}</p>
    //         </figcaption>
    //     </figure>
    //     </li>
    // </ul>
    // <ul className="adsaikat-flip-demo col-md-6">
    //     <li>
    //     <h2 className="hh">{props.lawyer[4].name}</h2>
    //     <figure>
    //         <img src={props.lawyer[4].img} alt="hover-image"/>
    //         <figcaption>
    //             <h2>{props.lawyer[4].Lno}</h2>
    //             <p>{props.lawyer[4].Description}</p>
    //         </figcaption>
    //     </figure>
    //     </li>
    // </ul>
    // </div>
    // <div className="grid row">
    //     <ul class="adsaikat-flip-demo col-md-6">
    //     <li>
    //     <h2 className="hh">{props.lawyer[6].name}</h2>
    //     <figure>
    //         <img src={props.lawyer[6].img} alt="hover-image"/>
    //         <figcaption>
    //             <h2>{props.lawyer[6].Lno}</h2>
    //             <p>{props.lawyer[6].Description}</p>
    //         </figcaption>
    //     </figure>
    //     </li>
    // </ul>
    
    // <ul className="adsaikat-flip-demo  col-md-6">
    //     <li>
    //     <div className="jj">
    //     <h1>
    //       We Provide  <span>Best Services</span>
    //     </h1>
    //     <button className="btn btnhome">Look at Our Services</button>
    //   </div>

    //     </li>
    // </ul>
    // </div>
    