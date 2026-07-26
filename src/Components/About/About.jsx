import {
  AWSServices,
  ProgrammingLanguages,
  Frontend,
  Backend,
  DatabaseAndCloud,
} from "./Skills";
import { AboutCard } from "./AboutCard";
import laptopImg from "../../Assets/About_2.jpeg";
import LinkedInProfile from "../../Assets/profilephoto.png";
import { Experience } from "./Experience";
import { Reveal } from "../Reveal";

function About() {
  return (
    <div className="about-main-container">
      <div className="about-first-section">
        <Reveal direction="up" className="about-first-text">
          <AboutCard />
        </Reveal>

        <Reveal direction="right">
          <img src={LinkedInProfile} alt="about" className="about-first-image" />
        </Reveal>
      </div>
      <div className="about-quote-section">
        <blockquote className="blockquote ">
          <p>
            "Anything's possible, you gotta dream like you never seen Obstacles"{" "}
          </p>
          <footer className="blockquote-footer">J. Cole</footer>
        </blockquote>
      </div>
      <div className="about-second-section">
        <Reveal direction="right">
          <img src={laptopImg} alt="about" className="about-second-image" />
        </Reveal>
        <Reveal direction="up" className="about-second-text">
          <p>
            Outside of work, I enjoy photography, basketball, and spending time
            in nature. I'm also passionate about cars — from their design to the
            engineering beneath the hood. These interests fuel my creativity,
            curiosity, and love for exploration beyond the screen.
          </p>
        </Reveal>
      </div>
      <div className="about-experience-section">
        <Experience />
      </div>
      <div className="about-techstack-section">
        <h2 className="project-heading">
          <strong>Skills</strong>
        </h2>
        <AWSServices />
        <DatabaseAndCloud />
        <Backend />
        <Frontend />
        <ProgrammingLanguages />
      </div>

      <div className="about-buymeacoffee-section">
        <a
          href="https://www.buymeacoffee.com/kevin46dsa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/default-orange.png"
            alt="Buy Me A Coffee"
            height="41"
            width="174"
          />
        </a>
      </div>
    </div>
  );
}

export default About;
