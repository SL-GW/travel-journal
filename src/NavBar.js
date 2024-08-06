import React from "react";
import "./NavBar.css";
import map from "./map.svg";

export default function NavBar() {
  return (
    <div className="NavBar">
      <h3>Travel Journel</h3>
      <img src={map} alt="map" width="90px" className="img-fluid map" />
    </div>
  );
}
