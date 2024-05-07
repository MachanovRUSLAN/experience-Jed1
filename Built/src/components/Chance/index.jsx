import React from "react";
import change from "../../img/chnce.png";
import backchance from "../../img/changeback.png";
import regh1 from "../../img/regh1.png";
import "./cance.css";

function Chance() {
  return (
    <div className="chance">
      <img src={change} alt="" />
      <img className="backChance" src={backchance} alt="" />
      <div className="register">
        <div className="reg-content">
          <h1>
            Don't <span className="miss">Miss</span>The
            <br /> Chance
          </h1>
          <p>
            Your early request will give you better oppurtunities
            <br />
            be first to grab the offer
          </p>
        </div>
        <div className="reg-form">
          <img className="reg" src={regh1} alt="" />
          <div className="form">
            <div className="info">
              <div className="inputDiv">
                <span>First name</span>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div className="inputDiv">
                <span>Last Name</span>
                <input type="text" placeholder="Enter your last name" />
              </div>
              <div className="inputDiv">
                <span>Email Address</span>
                <input type="text" placeholder="Enter  email adress" />
              </div>
              <div className="inputDiv">
                <span>Phone Number</span>
                <input type="text" placeholder="Enter phone number" />
              </div>
            </div>
            <div className="area">
              <p>How we can help?</p>
              <div className="area-input">
                <input type="text" placeholder="...Tell how we can help you?" />
              </div>
            </div>
            <button type="submit" className="subbtn">
              submit
            </button>
            <div className="res">
                 <p>We respect your privacy. Unsubscribe at any time.</p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chance;
