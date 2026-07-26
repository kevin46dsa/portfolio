import profilePhoto from "../../../Assets/profilephoto.png";
import { aboutSummary } from "../../About/AboutCard";
import { SectionHeading } from "../../SectionHeading";
import { SectionDivider } from "../../SectionDivider";
import { Reveal } from "../../Reveal";
import "./AboutPreview.css";

export const AboutPreview = () => (
  <section className="about-preview-section">
    <div className="about-preview-inner">
      <SectionDivider />
      <SectionHeading eyebrow="A Little About Me" title="About Me" to="/about" />
      <div className="about-preview-content">
        <Reveal direction="right" className="about-preview-photo-wrap">
          <img src={profilePhoto} alt="Kevin D'sa" className="about-preview-photo" />
        </Reveal>
        <Reveal direction="up" className="about-preview-text">
          <h3>{aboutSummary.heading}</h3>
          <p>{aboutSummary.teaser}</p>
        </Reveal>
      </div>
    </div>
  </section>
);
