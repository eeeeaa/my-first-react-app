/* eslint-disable react/prop-types */
import "./navigationBar.css";
import { Bio } from "../content/bio.jsx";
import { ExampleContent } from "../others/example.jsx";
import { Person } from "../content/person.jsx";
import { useState } from "react";

function generateRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function RandomColorButton({ handleColorChangeClick }) {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => {
        handleColorChangeClick(generateRandomColor());
        setCount(count + 1);
      }}
    >
      Random Color ({count})
    </button>
  );
}

export function NavBar({ handleNavClick, handleColorChangeClick }) {
  return (
    <div className="nav-bar">
      <div className="nav-logo">Dummy Corp</div>
      <div className="nav-buttons">
        <RandomColorButton handleColorChangeClick={handleColorChangeClick} />
        <button onClick={() => handleNavClick(<Bio />)}>Bio</button>
        <button onClick={() => handleNavClick(<ExampleContent />)}>
          Example
        </button>
        <button onClick={() => handleNavClick(<Person />)}>Person</button>
      </div>
    </div>
  );
}
