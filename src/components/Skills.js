import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Skills = ({ image }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-right" className="skills_img">
      <img src={image} alt="skills" />
    </div>
  );
};

export default Skills;
