import React from "react";
import madrid from "./madrid.jpg";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <div className="row">
        <div className="col-3">
          <img src={madrid} alt="Madrid" className="img-fluid rounded" />
        </div>
        <div className="col-9">
          <h4>Spain</h4>
          <h1>Madrid</h1>
          <h2>
            Madrid, the vibrant capital of Spain, boasts stunning attractions
            like the Royal Palace, the bustling Mercado de San Miguel, and the
            historic Plaza Mayor, offering a rich blend of culture and cuisine.
          </h2>
        </div>
      </div>
    </div>
  );
}
