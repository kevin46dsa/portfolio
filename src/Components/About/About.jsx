import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Techstack } from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/About_2.jpeg";
import LinkedInProfile from "../../Assets/profilephoto.png";
import { Toolstack } from "./Toolstack";

function About() {
  return (
    <div className="about-main-container">
      <div className="about-first-section">
        <div className="about-first-text">
          <Aboutcard />
        </div>

        <img src={LinkedInProfile} alt="about" className="about-first-image" />
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
        <img src={laptopImg} alt="about" className="about-second-image" />
        <div className="about-second-text">
          <p>
            Outside of my work, I indulge in a variety of hobbies and interests,
            including photography, basketball, and exploring the great outdoors.
            I find inspiration in the beauty of nature and the thrill of
            adventure. When I'm not tinkering with code or shooting hoops, I'm
            often found exploring the world of cars, delving into their inner
            workings and design features. My diverse range of interests and
            insatiable curiosity make me a unique and multifaceted individual.
          </p>
        </div>
      </div>

      <div className="about-techstack-section">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Techstack />
      </div>
      <div className="about-techstack-section">
        <h1 className="project-heading">
          <strong>Tools</strong> I use
        </h1>
        <Toolstack />
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
