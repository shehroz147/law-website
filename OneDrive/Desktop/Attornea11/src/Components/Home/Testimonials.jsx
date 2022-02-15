import React from 'react';
import L2 from '../pictures/L2.jpg';
import L3 from '../pictures/L3.jpg';
import L4 from '../pictures/L4.jpg';
 

export default function Testimonials() {
  return <div className='testimonial '>
    <h2>_____ What Client says about us</h2>
    <h1>Our <span>Testimonials</span> </h1>
  <div className="testcontainee  row">
        <div className="testies col-lg-3">
            <p>"I sincerely appreciate that lawyers took the trouble of typing out detailed answers in a meticulous manner, that too before proceeding to work, when all of us are busy. I got excellent advice from a team of expert lawyers which would have taken weeks and a lot more money otherwise. Thank you and your team of lawyers for providing this site."</p>
            <hr />
            <div className="desc">
            <img src={L2} alt=""  width={200}/>
            <h2>Irtaza Ansari</h2>
            </div>
           
        </div>
        <div className="testies col-lg-3">
            <p>"I really appreciate the effort and would like to say heartiest thank you. You have just made me a lifetime customer by the way you swiftly handled my issue is really commendable and would really like to laud you and entire ' attornea.com' team for creating this amazing website."</p>
        <hr />
            <div className="desc">
            <img src={L3} alt=""  width={200}/>
            <h2>Asfund  Naseer</h2>
            </div>
        </div>
        <div className="testies col-lg-3">
            <p>"I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment."</p>
        <hr />
            <div className="desc1">
            <img src={L4} alt=""  width={200}/>
            <h2>Saleh Butt</h2>
            </div>
        </div>
  </div>
    </div>
}
