import React from "react";
import "./Header.css";
import useWindowSize from "./hooks/useWindowSize";

function Header({ onClick }) {
  const size = useWindowSize();
  return (
    <h1 className="header">
      <a className="logo">Berk Durmus</a>
      {size.width > 800 && (
        <div className="navbar">
          <button className="navItem" onClick={() => onClick(0)}>
            Tech Stack
          </button>
          <button className="navItem" onClick={() => onClick(1)}>
            Work
          </button>
          <button className="navItem" onClick={() => onClick(2)}>
            Resume
          </button>
          <button className="navItem" onClick={() => onClick(3)}>
            Contact
          </button>
        </div>
      )}
    </h1>
  );
}

export default Header;
