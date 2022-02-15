import React from "react";
import { useState } from "react";

export default function MakeADocument() {
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
      <div className="makeadocument">
        <h1>Make A Document</h1>
      </div>
      <div className="make2">
        <div className="container-fluid row">
          <div className="col-lg-4">
            <img
              src="https://i0.wp.com/attornea.com/wp-content/uploads/2021/01/make-img.jpg?w=626&ssl=1"
              alt=""
              width={300}
            />
          </div>
          <div className="col-lg-4 makeright">
            <h2>______ ABSOLUTELY FREE OF COST</h2>
            <h1>
              Why Need Of <span>SPENDING MONEY</span>
            </h1>
            <p>
              Why need of spending money with a lawyer for making or drafting
              your legal document. Attornea is here to help you by drafting a
              legal agreement for you. *absolutely free of cost (for limited
              time only, terms and conditions apply). Simply choose your
              required legal document, fill in the details and get your document
              ready within one working day.
            </p>
          </div>
        </div>
        <div className="container-fluid backimg">
          <div className="row ">
            <div className="col-md-3 bluecont">
              <h2> Family And Personal</h2>
              <p>1) Divorce Deed</p>
              <p>2) Deed Of Adoption</p>
              <p>3) Deed Of Will </p>
              <p>4) Gift Deed</p>
              <p>5) Deed Of Trust</p>
              <p>6) Other</p>
            </div>
            <div className="col-md-3 bluecont">
              <h2> Real Estate</h2>
              <p>1) Rent/Lease Agreement</p>
              <p>2) Sale Deed</p>
              <p>3) Ejectment Notice </p>
              <p>4) Agreement to sell</p>
              <p>5) Mortgage Deed</p>
              <p>6) Other</p>
            </div>
            <div className="col-md-3 bluecont">
              <h2> Business & Contracts</h2>
              <p>1) Non Disclosure Agreement</p>
              <p>2) Business Contract</p>
              <p>3) Independent Contractor Agreement </p>
              <p>4) Join Venture Agreement</p>
              <p>5) Business Purchase Agreement</p>
              <p>6) Other</p>
            </div>
          </div>
        </div>
        <div className="container-fluid row form">
          <div className="col-md-5 leftform">
            <img
              src="https://i0.wp.com/attornea.com/wp-content/uploads/2021/01/make-1.jpg?w=626&ssl=1"
              alt=""
              width={400}
            />
          </div>
          <div className="col-md-6 righform">
            <input
              type="text"
              placeholder="Name*"
              onChange={(e) => setname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Country*"
              onChange={(e) => setcountry(e.target.value)}
            />
            <input
              type="text"
              placeholder="City*"
              onChange={(e) => setcity(e.target.value)}
            />
            <input
              type="text"
              placeholder="PhoneNo*"
              onChange={(e) => setphone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email*"
              onChange={(e) => setemail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Add Title To Your Question*"
              onChange={(e) => settitle(e.target.value)}
            />
            <select
              name="area"
              id="area"
              onChange={(e) => setarea(e.target.value)}
            >
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
            <textarea
              name="msg"
              id="msg"
              cols="30"
              rows="9"
              placeholder="Briefly Discribe Your Question*"
              onChange={(e) => setmsg(e.target.value)}
            ></textarea>
            <h2>Attach Document</h2>
            <input type="file" onChange={(e) => setfile(e.target.value)} />
            <br />
            <button className="btn submitbtn" onClick={(e) => SubmitForm()}>
              Submit Here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
