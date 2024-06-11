import React from "react";
import "./MobileNotesContent.css";

function MobileContent({ note }) {
  return (
    <div className="mobile_notes_content_body">
      <div className="mobile_notes_content_date_time">
        <div className="mobile_notes_content_time">{note.time}</div>
        <div className="mobile_notes_content_date">{note.date}</div>
      </div>
      <div className="mobile_notes_content_details">
        <p>{note.content}</p>
      </div>
    </div>
  );
}

export default MobileContent;