import React from "react";

import "./City.css";

export default function City(props) {
  return (
    <div className="City">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src={props.item.image}
              alt="Madrid"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-9">
            <h4>{props.item.country}</h4>
            <h1>{props.item.place}</h1>
            <h2>{props.item.description}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
