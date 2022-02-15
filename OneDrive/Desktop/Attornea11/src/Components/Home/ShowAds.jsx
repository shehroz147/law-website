import React from 'react';

export default function ShowAds(props) {
  return  <div className="grid2 ">
  <div className="container-fluid row">
        <h1>OUR SHOP </h1>
  {   
      props.Ads.map((ll)=>(
          <div className="lawyer col-lg-6">
          <img src={ll.img} alt="" width={500}/>
          <div className="ads">
              <h2>{ll.item}</h2>
              <p>{ll.desc}</p>
              <button className='btn btnhome3'>Purchase</button>
          </div>
          </div>
      ))
  }
 </div>
</div>;
}
