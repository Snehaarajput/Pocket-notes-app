import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../Components/Sidebar/Desktop/DesktopSidebar";
import DesktopHome from "../../Components/Home/HomeDesktop/DesktopHome";
import DesktopNotes from "../../Components/Notes/Desktop/DesktopNotes";
import usePocketContext from "../../Hooks/usePocketContext";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div style={{height: '100vh', width: '100vw', display: 'flex'}} className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
