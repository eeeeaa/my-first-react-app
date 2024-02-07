import "../styles/navigationBar.css";
import { Bio } from "./bio.jsx";
import { ExampleContent } from "./example.jsx";
import { Person } from "./person.jsx";
import ChatRoomPage from "./mockChatRoom.jsx";
import ClassInput from "./legacyExample.jsx";
import { useState } from "react";
import PropTypes from "prop-types";

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

function NavBar({ handleNavClick, handleColorChangeClick }) {
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
        <button onClick={() => handleNavClick(<ChatRoomPage />)}>
          Mock Chatroom
        </button>
        <button onClick={() => handleNavClick(<ClassInput />)}>
          Legacy Example
        </button>
      </div>
    </div>
  );
}

RandomColorButton.propTypes = {
  handleColorChangeClick: PropTypes.func.isRequired,
};

NavBar.propTypes = {
  handleColorChangeClick: PropTypes.func.isRequired,
  handleNavClick: PropTypes.func.isRequired,
};

export { NavBar };
