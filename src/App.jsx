import { NavBar } from "./topSection/navigationBar.jsx";
import { useState } from "react";
import { Bio } from "./content/bio.jsx";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(<Bio />);
  const [backgroundColor, setBackgroundColor] = useState("#242424");

  const onNavButtonClick = (currentPage) => {
    setCurrentPage(currentPage);
  };

  const onColorChangeClick = (backgroundColor) => {
    setBackgroundColor(backgroundColor);
  };
  return (
    <div className="appLayout" style={{ backgroundColor }}>
      <NavBar
        handleNavClick={onNavButtonClick}
        handleColorChangeClick={onColorChangeClick}
      />
      <div className="content">{currentPage}</div>
    </div>
  );
}

export default App;
