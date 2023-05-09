import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Projects.css";
const Projects = ({ title, image, technology, link }) => {
  // console.log(technology);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-in" className="projects">
      <img src={image} alt="preview" />
      <span className="project_title">{title}</span>
      <span className="tech_used">Technology Used</span>
      <div className="tech_div">
        {technology &&
          technology.map((tech) => {
            return <span>{tech}</span>;
          })}
      </div>
      <a href={link} target="blank">
        Live Site
      </a>
    </div>
  );
};

export default Projects;
