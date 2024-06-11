import React, { useEffect, useState } from "react";
import "./DesktopSidebar.css";
import NotesPopup from "../../NotesPopup/Desktop/DesktopNotesPopup";
import MobileSidebar from "../../Sidebar/Mobile/MobileSidebar";

function DesktopSidebar() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [grNamesParent, setGrNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGrNamesParent(JSON.parse(data));
    } else {
      setGrNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (grNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [grNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="desktop_sidebar">
      <div className="desktop_sidebar_title">Pocket Notes</div>
      <div className="desktop_sidebar_create_notes_btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
          <span>Create Notes Group</span>
        </button>
      </div>
      <div className="desktop_sidebar_notes_title">
        {titles.length > 0 ? (
          titles.map((title, index) => <MobileSidebar key={index} title={title} />)
        ) : (
          <div className="desktop_sidebar_notes_title_empty">
            <p>No Notes Group Created</p>
          </div>
        )}
      </div>
      {showPopup && (
        <div className="desktop_popup_overlay">
          <NotesPopup
            grNamesParent={grNamesParent}
            setGrNamesParent={setGrNamesParent}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
}

export default DesktopSidebar;
