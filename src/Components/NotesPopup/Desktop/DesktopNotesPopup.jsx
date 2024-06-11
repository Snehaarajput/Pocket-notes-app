import React, { useState } from "react";
import "./DesktopNotesPopup.css";

function NotesPopup({ grNamesParent, setGrNamesParent, onClose }) {
  const [groupName, setGrName] = useState("");
  const [bgColor, setBgColor] = useState("");

  const handleGrName = (e) => {
    setGrName(e.target.value);
  };

  const handleColor = (e) => {
    const div = e.target;
    setBgColor(getComputedStyle(div).backgroundColor);
  };

  const saveName = () => {
    const newGroup = { name: groupName, color: bgColor };
    setGrNamesParent([...grNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...grNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup_title">Create New Notes Group</div>
      <div className="popup_input">
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGrName}
          type="text"
          placeholder="Enter Your group Name..."
        />
      </div>
      <div className="popup_color_input">
        <span>Choose Color</span>
        <div className="popup_input_color">
          <div
            className={`popup_1 ${
              bgColor === "rgb(179, 139, 250)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup_2 ${
              bgColor === "rgb(255, 121, 242)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup_3 ${
              bgColor === "rgb(67, 230, 252)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup_4 ${
              bgColor === "rgb(241, 149, 118)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup_5 ${
              bgColor === "rgb(0, 71, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`popup_6 ${
              bgColor === "rgb(102, 145, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
        </div>
      </div>
      <div className="popup_close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  );
}

export default NotesPopup;
