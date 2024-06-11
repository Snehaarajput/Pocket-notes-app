import React, { useState } from 'react'
import "./MobileNotesPopup.css"

function MobilePopup({ onClose, groupNamesParent, setGroupNamesParent}) {
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
    setGroupNamesParent([...groupNamesParent, newGroup]);
    localStorage.setItem(
      "groupNames",
      JSON.stringify([...groupNamesParent, newGroup])
    );
    onClose();
  };

  return (
    <div className="mobile_popup">
      <div className="mobile_popup_title">Create New Notes Group</div>
      <div className="mobile_popup_input">
        <span>Group Name</span>
        <input
          value={groupName}
          onChange={handleGrName}
          type="text"
          placeholder="Enter your group name..."
        />
      </div>
      <div className="mobile_popup_color_input">
        <span>Group Color</span>
        <div className="mobile_popup_color_input_color">
          <div
            className={`mobile_popup_color_input_color_1 ${
              bgColor === "rgb(179, 139, 250)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`mobile_popup_color_input_color_2 ${
              bgColor === "rgb(255, 121, 242)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`mobile_popup_color_input_color_3 ${
              bgColor === "rgb(67, 230, 252)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`mobile_popup_color_input_color_4 ${
              bgColor === "rgb(241, 149, 118)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`mobile_popup_color_input_color_5 ${
              bgColor === "rgb(0, 71, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
          <div
            className={`mobile_popup_color_input_color_6 ${
              bgColor === "rgb(102, 145, 255)" ? `highlight` : null
            }`}
            onClick={handleColor}
          ></div>
        </div>
      </div>
      <div className="mobile_popup_close">
        <button onClick={saveName} disabled={groupName.length === 0}>
          Create
        </button>
      </div>
    </div>
  )
}

export default MobilePopup