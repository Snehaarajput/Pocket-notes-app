// Mobile Homepage to display titles
import React from "react";
import "./MobileNotes.css";
import { useNavigate } from "react-router-dom";
import usePocketContext from "../../../Hooks/usePocketContext";

function MobileNotes({ title }) {
  const navigate = useNavigate();
  const { setSelected } = usePocketContext();
  const initials = title[0].name
    .split(" ")
    .map((n) => n[0].toUpperCase())
    .join("");
  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const handleTitleClick = () => {
    localStorage.setItem("selected", title[0].name);
    setSelected(title[0].name);
    navigate("/notes");
  };
  return (
    <div onClick={handleTitleClick} className="mobile_notes">
      <div
        className="mobile_notes_icon"
        style={{ backgroundColor: title[0].color }}
      >
        {initials}
      </div>
      <div className="mobile_notes_title">{newTitle}</div>
    </div>
  );
}

export default MobileNotes;
