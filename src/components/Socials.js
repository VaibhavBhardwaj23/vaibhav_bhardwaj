import "./Socials.css";
import React, { useContext } from "react";
import ThemeContext from "../context/Context.js";
export const Socials = ({ image, link }) => {
  const { darkTheme } = useContext(ThemeContext);
  console.log(darkTheme);
  const imageVariable = `${image}${darkTheme ? "dark" : "light"}.png`;
  console.log(imageVariable);
  return (
    <a href={link}>
      <img src={imageVariable} alt="insta" />
    </a>
    //   {/* <a href="https://www.linkedin.com/in/vaibhav-bhardwaj-b9aa48120/">
    //     <img src="./images/linkedin_light.png" alt="linkedin" />
    //   </a>
    //   <a href="https://github.com/VaibhavBhardwaj23">
    //     <img src="./images/github_light.png" alt="git" />
    //   </a> */}
  );
};
