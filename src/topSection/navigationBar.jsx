/* eslint-disable react/prop-types */
import "./navigationBar.css";
import { Bio } from "../content/bio.jsx";
import { ExampleContent } from "../others/example.jsx";

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

export function NavBar({ handleNavClick, handleColorChangeClick }) {
  return (
    <div className="nav-bar">
      <div className="nav-logo">Dummy Corp</div>
      <div className="nav-buttons">
        <button onClick={() => handleColorChangeClick(generateRandomColor())}>
          Random Color
        </button>
        <button onClick={() => handleNavClick(<Bio />)}>Bio</button>
        <button onClick={() => handleNavClick(<ExampleContent />)}>
          Example
        </button>
      </div>
    </div>
  );
}
