import React from "react";
import "./choose.css";
import choseimg1 from "../../img/chose1.png";
import chooseimg2 from "../../img/chose2.png";
import quaimg from "../../img/quality.png";
import secure from "../../img/secure.png";
import price from "../../img/price.png";
import { Row, Col } from "react-bootstrap";

function Choose() {
  return (
    <div className="section-choose">
      <h1>
        Why <span className="us">Choose Us ?</span>
      </h1>
      <Row>
        <div className="Maincontainer">
          <Col lg="6">
            <div className="chose-img">
              <img src={choseimg1} alt="" />
              <img className="choseimg2" src={chooseimg2} alt="" />
            </div>
          </Col>
          <Col lg="6">
            <div className="choseContainer">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                error suscipit <br /> quo, necessitatibus nam consectetur sequi
                fugit ipsa hic quisquam quae fuga ab impedit
                <br /> laborum illum obcaecati at. Quo, amet.
              </p>
              <div className="icons">
                <div className="quality">
                  <img src={quaimg} alt="" />
                </div>
                <div className="secure">
                  <img src={secure} alt="" />
                </div>
                <div className="price">
                  <img src={price} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </div>
  );
}

export default Choose;
