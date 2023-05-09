import React, { useContext } from "react";
import "./Header.css";
import ThemeContext from "../context/Context";

const Header = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  return (
    <div className="header">
      <h1 className="logo_title">Vaibhav Bhardwaj .</h1>
      <div className="menu_options">
        <span className="options">About</span>
        <span className="options">Work</span>
        <span className="options">Skills</span>
        <span className="options">Drop Me a Line</span>
      </div>

      <div
        onClick={() => setDarkTheme((prevState) => !prevState)}
        className="theme_switch"
      >
        {!darkTheme ? (
          <>
            <img src="./images/light.png" alt="theme" />
            <span>Light</span>
          </>
        ) : (
          <>
            <img src="./images/dark.png" alt="theme" />
            <span>Dark</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
