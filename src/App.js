import { useEffect, useState } from "react";
import "./App.css";
import DesktopView from "./Views/DesktopView/DesktopView";
import MobileView from "./Views/MobileView/MobileView";
import NotesMobilePage from "./Components/NotesMobilePage/NotesMobilePage";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./Context/PocketContext";
import usePocketContext from "./Hooks/usePocketContext";

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const { selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    // eslint-disable-next-line
  }, [selected]);

  useEffect(() => {
    const checkScreenSize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize); // Clean up the event listener
  }, []);

  return (
    <Provider>
      <div className="App">
        {screenSize > 500 ? (
          <DesktopView />
        ) : (
          <Routes>
            <Route path="/" element={<MobileView />} />
            <Route path="/notes" element={<NotesMobilePage />} />
          </Routes>
        )}
      </div>
    </Provider>
  );
}

export default App;
