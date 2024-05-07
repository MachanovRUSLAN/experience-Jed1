import React from "react";
import jac from "../../img/jack.png";
import tab from "../../img/tab.png";
import sal from "../../img/sal.png";
import more from "../../img/more.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "./floor.css";

function FloorPlan() {
  return (
    <div className="FloorSection">
      <div className="foorplan">
        <h1>Floor Plans</h1>
        <p>Best floor plans to accoomodate all your utilities</p>
        <div className="floorcards">
          <Row>
            <Col>
              <div className="card-1">
                <img src={jac} alt="" />
                <div className="content">
                  <h1>2BHK</h1>
                  <p>
                    Drive organic traffic and increase visibility across search
                    engines.
                  </p>
                  <img src={more} alt="" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-1">
                <img src={tab} alt="" />
                <div className="content">
                  <h1>5BHK</h1>
                  <p>
                    Increase high-intent traffic with ads across search engines.
                  </p>
                  <img src={more} alt="" />
                </div>
              </div>
            </Col>
            <Col>
              <div className="card-1">
                <img src={sal} alt="" />
                <div className="content">
                  <h1>4BHK</h1>
                  <p>
                    Advertise across social media networks such as Facebook and
                    Instagram.
                  </p>
                  <img src={more} alt="" />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
     
    </div>
  );
}

export default FloorPlan;
