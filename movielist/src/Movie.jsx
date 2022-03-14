import React from "react"
import data from "./data"

function Movie(props) {
  return (
    <div className="App">
      <div className="card">
        <div className="cards">
          <img src={props.img} alt="my_pic" className="card_img"/>
          <div className="card_info">
            <span className="crad_category">A {props.platform} Original Series</span>
            <h3 className="card_title">{props.title}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie