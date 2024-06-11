import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotesMobilePage.css";
import enter from "../../Assets/Images/enter.png";
import back from "../../Assets/Images/back.png";
import home from "../../Assets/Images/home.png";
import MobileNotesContent from "../NotesContent/Mobile/MobileNotesContent";
import usePocketContext from "../../Hooks/usePocketContext";

function NotesMobilePage() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const navigate = useNavigate();
  const { notes, setNotes, selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = groupNames.find((group) => group.name === selected);
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
  }, [selected, setNotes, setSelected]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
      setText("");
    }
  };

  const handleSaveNotes = (e) => {
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text,
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

  const goBack = () => {
    setSelected("");
    navigate("/");
  };

  return (
    <div className="mobiles_notes_page">
      <div className="mobile_notes_content_title">
        <img src={back} alt="back" onClick={goBack} />
        <div
          className="mobile_notes_content_title_color"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="mobile_notes_content_title_text">
          {selectedTitle}
        </div>
      </div>
      <div className="mobile_notes_page_body">
        {notes.length === 0 ? (
          <div
            className="mobile_notes_page_body_empty"
            style={{ backgroundImage: `url(${home})` }}
          ></div>
        ) : (
          <div>
            {notes.map((note, index) => (
              <MobileNotesContent key={index} note={note} />
            ))}
          </div>
        )}
      </div>
      <div className="mobile_notes_input">
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="enter" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default NotesMobilePage;
