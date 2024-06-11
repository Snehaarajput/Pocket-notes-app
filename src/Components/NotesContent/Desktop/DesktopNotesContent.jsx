import React from "react";
import "./DesktopNotesContent.css";

function DesktopNotesContent({ note }) {
  
  return (
    <div className="desktop_notes_content_note">
      <div className="desktop_notes_content_date_time">
        <div className="desktop_notes_content_time">{note.time}</div>
        <div className="desktop_notes_content_date">{note.date}</div>
      </div>
      <div className="desktop_notes_content_details">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default DesktopNotesContent;
