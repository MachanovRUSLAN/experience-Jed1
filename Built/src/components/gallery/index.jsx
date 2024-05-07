import React from 'react'
import g1 from "../../img/g1.png";
import g2 from "../../img/g2.png";
import g3 from "../../img/g3.png";
import g4 from "../../img/g4.png";
import g5 from "../../img/g5.png";
import "./galery.css"


function Gallery() {
  return (
    <div className="galerry">
        <h1>Our Gallery</h1>
        <p>Best in class features in the city</p>
        <div className="grid-galery">
          <div className="galery">
            <img className='g1' src={g1} alt="" />
            <img className='g2'  src={g2} alt="" />
            <img className='g3'  src={g3} alt="" />
            <img  className='g4' src={g4} alt="" />
            <img className='g5' src={g5} alt="" />
          </div>
        </div>
      </div>
  )
}

export default Gallery