import React from "react";
import "./Mail.css";
const Mail = () => {
  return (
    <div className="mail_button">
      <span>Drop me a Line</span>
      <a href="mailto:vaibhavb0203@icloud.com.com">
        <img src="./images/arrow.png" alt="arrow" />
      </a>
    </div>
  );
};

export default Mail;
