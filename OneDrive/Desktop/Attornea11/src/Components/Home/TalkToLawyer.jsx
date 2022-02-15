import React from "react";
import { useState } from "react";
export default function TalkToLawyer() {
  const [Name, setname] = useState("");
  const [Country, setcountry] = useState("");
  const [City, setcity] = useState("");
  const [Phone, setphone] = useState("");
  const [Email, setemail] = useState("");
  const [Title, settitle] = useState("");
  const [Area, setarea] = useState("");
  const [Message, setmsg] = useState("");
  const [File, setfile] = useState("");
  const SubmitForm = () => {
    //Api Calling
  };
  return (
    <div className="container-fluid">
      <div className="talktolawyer">
        <h1>Talk To A Lawyer</h1>
      </div>
      <div className="row talkinfo">
        <div className="col-md-4">
          <img
            src="https://i0.wp.com/attornea.com/wp-content/uploads/2021/01/Welcome-to-LawPress.jpg?w=572&ssl=1"
            alt=""
          />
        </div>
        <div className="col-md-4 rigthinfo">
          <h1>
            How Does <span>it work?</span>{" "}
          </h1>
          <p>
            Do you think that your query is a complex one and can only be
            redressed by talking to lawyer or you want to talk to lawyer before
            hiring him? Don’t worry, Schedule a Telephonic Consultancy by
            following the simple method.
          </p>
          <h2>Procedure</h2>
          <p>
            <span>1</span>Provide the details as requested.
          </p>
          <p>
            <span>2</span>Pay the consultancy fees and attach receipt of the
            same.
          </p>
          <p>
            <span>3</span>Attornea will contact you on the date & time scheduled
            by you.
          </p>
          <p>
            Attornea will choose the best and nearby lawyer of your city for
            telephonic consultancy and if you are not satisfied with his
            consultancy Attornea will arrange another nearby lawyer for you
            without paying any additional fees or hidden charges. i.e. your
            payment will remain secured till your satisfaction.
          </p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="talktoform ">
          <div className="row">
            <div className="col-md-4 talkform">
              <h3>_____ Do You think</h3>
              <h1>
                Consultation <span>Charges:</span>
              </h1>
              <div className="row">
                <div className="col">
                  <h2>International</h2>
                  <p>$20.99</p>
                </div>
                <div className="col">
                  <h2>For locals</h2>
                  <p>Rs 1999</p>
                </div>
              </div>
              <h1>
                Bank <span>Details</span>
              </h1>
              <div className="row">
                <div className="col">
                  <p>Account Title</p>
                  <p>Account Number</p>
                  <p>Branch Code</p>
                  <p>Bank Name</p>
                </div>

                <div className="col">
                  <p>XXXXX</p>
                  <p>XXXXX</p>
                  <p>XXXXX</p>
                  <p>XXXXX</p>
                </div>
              </div>
            </div>
            <div className="col-md-2 rigthform">
           <input type="text" placeholder="Name*" onChange={(e)=>setname(e.target.value)} />
           <input type="text" placeholder="Country*" onChange={(e)=>setcountry(e.target.value)} />
           <input type="text" placeholder="City*" onChange={(e)=>setcity(e.target.value)}/>
           <input type="text" placeholder="PhoneNo*" onChange={(e)=>setphone(e.target.value)}/>
           <input type="text" placeholder="Email*" onChange={(e)=>setemail(e.target.value)}/>
           <input type="text" placeholder="Add Title To Your Question*" onChange={(e)=>settitle(e.target.value)}/>
           <select name="area" id="area" onChange={(e)=>setarea(e.target.value)}>
           <option value="CivilLaw">Area Of Law</option>
             <option value="CivilLaw">Civil Law</option>
             <option value="FamilyLaw">Family Law</option>
             <option value="TaxationLaw">Taxation Law</option>
             <option value="TransactionWork">Transactional Work</option>
             <option value="Visa">Visa & Immigration Services</option>
             <option value="Employement">Employment/Labour Law</option>
             <option value="Probono">PRO-Bono Services</option>
             <option value="Others">-Others-</option>    
           </select>
           <textarea name="msg" id="msg" cols="30" rows="9" placeholder="Briefly Discribe Your Question*" onChange={(e)=>setmsg(e.target.value)}></textarea>
           <h2>Attach Document</h2>
           <input type="file" onChange={(e)=>setfile(e.target.value)} /><br />
           <button className="btn submitbtn" onClick={(e)=>SubmitForm()}>Submit Here</button>
         </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ttl">
           <div className="row">
            <h3>____ Great Services</h3>
            <h1>We Offer Great <span>Lawyers Services</span> </h1>
                <div className="col-md-4">
                    
                
                </div>
           </div>
      </div>
    </div>
  );
}
