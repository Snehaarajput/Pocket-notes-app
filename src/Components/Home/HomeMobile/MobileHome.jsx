import React from "react";
import "./MobileHome.css";
import notes from "../../../Assets/Images/notes.jpg";

function MobileHome() {
  return (
    <div
      className="mobile_home"
      style={{
        backgroundImage: `url(${notes})`,
      }}
    >
      Create Your First Note...
    </div>
  );
}

export default MobileHome;
