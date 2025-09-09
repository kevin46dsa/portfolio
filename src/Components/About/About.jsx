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
import { useEffect, useRef, useState } from "react";

function About() {
  const firstTextRef = useRef(null);
  const firstImgRef = useRef(null);
  const secondTextRef = useRef(null);
  const secondImgRef = useRef(null);

  const [visible, setVisible] = useState({
    firstText: false,
    firstImg: false,
    secondText: false,
    secondImg: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target.getAttribute("data-id");
          if (entry.isIntersecting && target) {
            setVisible((prev) => ({ ...prev, [target]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    [firstTextRef, firstImgRef, secondTextRef, secondImgRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [firstTextRef, firstImgRef, secondTextRef, secondImgRef].forEach(
        (ref) => {
          if (ref.current) observer.unobserve(ref.current);
        }
      );
    };
  }, []);

  return (
    <div className="about-main-container">
      <div className="about-first-section">
        <div
          className={`about-first-text fade-up ${visible.firstText ? "animate" : ""}`}
          ref={firstTextRef}
          data-id="firstText"
        >
          <AboutCard />
        </div>

        <img
          src={LinkedInProfile}
          alt="about"
          className={`about-first-image fade-right ${visible.firstImg ? "animate" : ""}`}
          ref={firstImgRef}
          data-id="firstImg"
        />
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
        <img
          src={laptopImg}
          alt="about"
          className={`about-second-image fade-right ${visible.secondImg ? "animate" : ""}`}
          ref={secondImgRef}
          data-id="secondImg"
        />
        <div
          className={`about-second-text fade-up ${visible.secondText ? "animate" : ""}`}
          ref={secondTextRef}
          data-id="secondText"
        >
          <p>
            Outside of work, I enjoy photography, basketball, and spending time
            in nature. I'm also passionate about cars — from their design to the
            engineering beneath the hood. These interests fuel my creativity,
            curiosity, and love for exploration beyond the screen.
          </p>
        </div>
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
