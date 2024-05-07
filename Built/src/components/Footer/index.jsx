import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fotlogo from "../../img/footlogo.png";
import exlpore from "../../img/footexplore.png";
import our from "../../img/our company.png";
import face from "../../img/facebook.png";
import twit from "../../img/twitter.png";
import inst from "../../img/instagram.png";
import vect from "../../img/Vector.png";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="footcard">
          <img src={fotlogo} alt="" />
          <p className="fotCont">
            Lorem ipsum dolor sit amet, consectetur
            <br /> adipiscing elit, sed do eiusmod.
          </p>
          <div className="sosial-icons">
            <div className="iconface">
              <img src={face} alt="" />
            </div>

            <div className="icon">
              <img src={twit} alt="" />
            </div>

            <div className="icon">
              <img src={inst} alt="" />
            </div>

            <div className="icon">
              <img src={vect} alt="" />
            </div>
          </div>
        </div>{" "}
        <div className="footcardCenter">
          <img src={exlpore} alt="" />
          <div className="footbtn">
            <button>Wiew Now</button>
            <button className="num">+29229992</button>
          </div>
        </div>{" "}
        <div className="footcardLast">
          <img src={our} alt="" />
          <div className="footlinks">
            <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Faq</p>
          </div>
        </div>
      </div>
      <div className="lastcont">
        <p>© Copyright 2020 Lorem Inc. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
