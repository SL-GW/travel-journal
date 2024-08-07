import React from "react";
import "./NavBar.css";
import map from "./map.svg";

export default function NavBar() {
  return (
    <nav className="NavBar">
      <div className="grid">
        <div>
          <h3>Travel Journel</h3>
        </div>
        <div>
          <img src={map} alt="map" width="70px" className="img-fluid map" />
        </div>
      </div>
    </nav>
  );
}
