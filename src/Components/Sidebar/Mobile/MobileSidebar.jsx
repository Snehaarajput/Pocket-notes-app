import React from "react";
import "./MobileSidebar.css";
import usePocketContext from "../../../Hooks/usePocketContext";

function MobileSidebar({ title }) {
  const { selected, setSelected } = usePocketContext();
  const nameInitals = title[0].name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const handleTitleClick = () => {
    setSelected(title[0].name);
  };

  return (
    <div
      onClick={handleTitleClick}
      className={`group_title_logo ${
        selected === title[0].name ? "highlighted_title" : null
      }`}
    >
      <div className="title_logo" style={{ backgroundColor: title[0].color }}>
        {nameInitals}
      </div>
      <div className="group_title">{newTitle}</div>
    </div>
  );
}

export default MobileSidebar;
