import { NavBar } from "./navigationBar.jsx";
import { useState } from "react";
import { Bio } from "./bio.jsx";
import "../styles/App.css";

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
    <div
      className="appLayout"
      style={{ backgroundColor }}
      data-testid="main-app-page"
    >
      <NavBar
        handleNavClick={onNavButtonClick}
        handleColorChangeClick={onColorChangeClick}
      />
      <div className="content">{currentPage}</div>
    </div>
  );
}

export default App;
