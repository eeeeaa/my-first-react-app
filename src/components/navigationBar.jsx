import "../styles/navigationBar.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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

function NavBar({ handleColorChangeClick }) {
  return (
    <div className="nav-bar">
      <div className="nav-logo">Dummy Corp</div>
      <div className="nav-buttons">
        <RandomColorButton handleColorChangeClick={handleColorChangeClick} />
        <Link to="/">
          <button>Bio</button>
        </Link>
        <Link to="example">
          <button>Example</button>
        </Link>
        <Link to="person">
          <button>Person</button>
        </Link>
        <Link to="chatroom">
          <button>Chatroom</button>
        </Link>
        <Link to="legacy-example">
          <button>Legacy Example</button>
        </Link>
      </div>
    </div>
  );
}

RandomColorButton.propTypes = {
  handleColorChangeClick: PropTypes.func.isRequired,
};

NavBar.propTypes = {
  handleColorChangeClick: PropTypes.func.isRequired,
};

export { NavBar };
