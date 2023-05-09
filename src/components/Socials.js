import "./Socials.css";
import React, { useContext } from "react";
import ThemeContext from "../context/Context.js";
export const Socials = ({ image, link }) => {
  const { darkTheme } = useContext(ThemeContext);
  const imageVariable = `${image}${darkTheme ? "dark" : "light"}.png`;
  return (
    <a href={link}>
      <img src={imageVariable} alt="insta" />
    </a>
  );
};
