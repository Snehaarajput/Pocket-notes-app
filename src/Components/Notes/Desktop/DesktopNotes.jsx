import React, { useEffect, useState } from "react";
import "./DesktopNotes.css";
import enter from "../../../Assets/Images/enter.png";
import DesktopNotesContent from "../../NotesContent/Desktop/DesktopNotesContent";
import usePocketContext from "../../../Hooks/usePocketContext";

function DesktopNotes() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const { notes, setNotes, selected } = usePocketContext();

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const grNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = grNames.find((group) => group.name === selected);
    if (selectedGroup) {
      setBgColor(selectedGroup.color);
      const words = selectedGroup.name.split(" ");
      let initials = "";
      if (words.length === 2) {
        initials = words[0].charAt(0) + words[1].charAt(0);
      } else if (words.length >= 3) {
        initials = words[0].charAt(0) + words[2].charAt(0);
      } else {
        initials = words[0].charAt(0) + words[0].charAt(1);
      }
      setInitials(initials.toUpperCase());
      setSelectedTitle(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [selected, setNotes]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
    }
  };

  const handleSaveNotes = () => {
    if (!text.trim()) {
      return;
    }
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text.trim(),
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString("en-GB", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="desktop_notes">
      <div className="desktop_notes_title">
        <div
          className="desktop_notes_title_color"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="desktop_notes_title_text">{selectedTitle}</div>
      </div>
      <div className="desktop_notes_content">
        {notes && notes.length > 0
          ? notes.map((note, index) => (
              <DesktopNotesContent key={index} note={note} />
            ))
          : null}
      </div>
      <div className="desktop_notes_input">
        <textarea
          value={text}
          placeholder="Enter your text here.........."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="enter" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default DesktopNotes;
