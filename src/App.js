import { useContext, useEffect } from "react";
import "./App.css";
import ThemeContext from "./context/Context";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Mail from "./components/Mail";
import { Socials } from "./components/Socials";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
  // console.log(darkTheme);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    const checkLocalStorage = () => {
      if (localStorage.getItem("Theme")) {
        const themeFound = JSON.parse(localStorage.getItem("Theme"));
        setDarkTheme(themeFound);
      } else {
        console.log("No");
      }
    };
    return checkLocalStorage;
  }, []);

  return (
    <div className={!darkTheme ? "light_theme" : "dark_theme"}>
      <Header />
      <Home />
      <div className="marquee">
        <span>SKILLS ACQUIRED</span>
        <span>SKILLS ACQUIRED</span>
        <span>SKILLS ACQUIRED</span>
        <span>SKILLS ACQUIRED</span>
        <span>SKILLS ACQUIRED</span>
        <span>SKILLS ACQUIRED</span>
      </div>
      <div className="skills_container">
        <Skills key={1} image="./images/html.png" />
        <Skills key={2} image="./images/js.png" />
        <Skills key={3} image="./images/css.png" />
        <Skills key={4} image="./images/react.png" />
      </div>
      <div className="marquee">
        <span>PROJECTS MADE </span>
        <span>PROJECTS MADE </span>
        <span>PROJECTS MADE </span>
        <span>PROJECTS MADE </span>
        <span>PROJECTS MADE </span>
        <span>PROJECTS MADE </span>
      </div>
      <div className="projects_container">
        <Projects
          key={1}
          title="Weather App"
          image="./images/weather.jpg"
          technology={["HTML", "CSS", "ReactJS", "API"]}
          link="https://forecast-and-weather-app.netlify.app/"
        />
        <Projects
          key={2}
          title="Cinebase"
          image="./images/cinebase.jpg"
          technology={["HTML", "CSS", "ReactJS", "API", "TailWindCss"]}
          link="https://cinebase1.netlify.app/"
        />
        <Projects
          key={3}
          title="To Do App- TaskIt"
          image="./images/taskit.jpg"
          technology={["HTML", "CSS", "ReactJS"]}
          link="https://task1t.netlify.app/"
        />
        <Projects
          key={4}
          title="Weather App"
          image="./images/weather.jpg"
          technology={["HTML", "CSS", "ReactJS", "API"]}
          link="https://task1t.netlify.app/"
        />
        <Projects
          key={5}
          title="Weather App"
          image="./images/weather.jpg"
          technology={["HTML", "CSS", "ReactJS", "API"]}
          link="https://forecast-and-weather-app.netlify.app/"
        />
      </div>
      <div className="descript">
        <span>
          "Crafting innovative digital experiences through cutting-edge web
          development techniques - let me bring your ideas to life."
        </span>
        <Mail />
      </div>
      <hr />
      <div className="social">
        <span>Let's Connect</span>
        <div className="socials">
          <Socials
            key={1}
            image="./images/instagram_"
            link="https://www.instagram.com/iamvaibhavbhardwaj/"
          />
          <Socials
            key={2}
            image="./images/linkedin_"
            link="https://www.linkedin.com/in/vaibhav-bhardwaj-b9aa48120/"
          />
          <Socials
            key={3}
            image="./images/github_"
            link="https://github.com/VaibhavBhardwaj23"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
