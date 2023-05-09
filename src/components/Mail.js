import React from "react";
import "./Mail.css";
const Mail = () => {
  return (
    <a href="mailto:vaibhavb0203@icloud.com.com">
      <div className="mail_button">
        <span>Drop me a Line</span>
        <img src="./images/arrow.png" alt="arrow" />
      </div>
    </a>
  );
};

export default Mail;
