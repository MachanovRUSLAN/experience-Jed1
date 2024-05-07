import React from "react";
import { Row, Col } from "react-bootstrap";
import "./amenities.css";
import "bootstrap/dist/css/bootstrap.min.css";
import mult from "../../img/multCenter.png";
import swim from "../../img/swimpol.png";
import guest from "../../img/guest.png";
import backam from "../../img/amenBack.png";

function Ameneties() {
  return (
    <div className="AmenetiesSection">
      <div className="Ameneties">
        <h1>Ameneties</h1>
        <p>High class features with 24x7 maintenance</p>
        <div className="backam">
          <img src={backam} alt="" />
        </div>
        <div className="cards">
          <Row>
            <Col lg="3" style={{ zIndex: 99 }}>
              <div className="mult">
                <img src={mult} alt="" />
              </div>
            </Col>
            <Col lg="3" style={{ zIndex: 99 }}>
              <div className="swim">
                <img src={swim} alt="" />
              </div>
            </Col>
            <Col lg="3" style={{ zIndex: 99 }}>
              <div className="swim">
                <img src={swim} alt="" />
              </div>
            </Col>
            <Col lg="3" style={{ zIndex: 99 }}>
              <div className="quest">
                <img src={guest} alt="" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Ameneties;
