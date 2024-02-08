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
    <section className="top-nav">
      <div className="nav-logo">Dummy Corp</div>
      <RandomColorButton handleColorChangeClick={handleColorChangeClick} />
      <input id="menu-toggle" type="checkbox" />
      <label className="menu-button-container" htmlFor="menu-toggle">
        <div className="menu-button"></div>
      </label>

      <ul className="menu">
        <li>
          <Link to="/">Bio</Link>
        </li>
        <li>
          <Link to="example">Example</Link>
        </li>
        <li>
          <Link to="person">Person</Link>
        </li>
        <li>
          <Link to="chatroom">Chatroom</Link>
        </li>
        <li>
          <Link to="legacy-example">Legacy Example</Link>
        </li>
        <li>
          <Link to="network-example">Network Example</Link>
        </li>
      </ul>
    </section>
  );
}

RandomColorButton.propTypes = {
  handleColorChangeClick: PropTypes.func.isRequired,
};

NavBar.propTypes = {
  handleColorChangeClick: PropTypes.func.isRequired,
};

export { NavBar };
