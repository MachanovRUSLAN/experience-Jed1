import React from "react";
import "./imgPart.css";
import img1 from "../../img/Rectangle 4227.png";
import img2 from "../../img/Group 11211.png";
import img3 from "../../img/Group 11213.png";
import img4 from "../../img/back.png";

function HomeImg() {
  return (
    <div className="section-img">
      <div className="img-part">
        <img src={img1} alt="" />
        <div className="img1">
          <img src={img2} alt="" />
        </div>
        <div className="img2">
          <img src={img3} alt="" />
        </div>
      </div>
      <img className="back" src={img4} alt="" />
    </div>
  );
}

export default HomeImg;
