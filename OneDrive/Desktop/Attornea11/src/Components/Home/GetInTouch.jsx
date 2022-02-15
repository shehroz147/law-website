import React from 'react';

export default function GetInTouch() {
  return <div className='getintouch '>
    <div className="row">
          <div className="col-md-4">
        <img src="https://i0.wp.com/attornea.com/wp-content/uploads/2021/01/home-sec.jpg?w=710&ssl=1" alt=""/>
        </div>
        <div className="form col-md-4">
            <h3>______ Get In Touch</h3>
            <h1>Ready to <span>get started?</span></h1>
            <p>Please, fulfill the form to get a consultation. After processing the data, a repersentative will contact you.</p> 
            <input type="text" placeholder='Your Name*' id = "name"/>
            <input type="text" placeholder='Your Email*' id = "email"/>
            <input type="number" placeholder='Your Phone*' id = "number"/>
            <input type="text" placeholder='Subject*' id = "subject"/>
            <textarea name="msg" id="msg" cols="76" rows="15" placeholder='Message...'></textarea>
            <button className='btn btnhome'>Submit Now</button>
         </div>
         </div>
  </div>;
}
