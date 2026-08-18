import { experienceData } from "../../About/Experience";
import { SectionHeading } from "../../SectionHeading";
import { SectionDivider } from "../../SectionDivider";
import { RevealGroup, RevealItem } from "../../Reveal";
import "./ExperiencePreview.css";

const recentRoles = experienceData.slice(0, 2);

const stripBullet = (bullet: string) => bullet.replace(/^-\s*/, "");

export const ExperiencePreview = () => (
  <section className="experience-preview-section">
    <div className="experience-preview-inner">
      <SectionDivider />
      <SectionHeading eyebrow="Where I've Worked" title="Work Experience" to="/about" />
      <RevealGroup className="experience-preview-list">
        {recentRoles.map((role) => (
          <RevealItem key={role.cardTitle} className="experience-preview-card" direction="up">
            <span className="experience-preview-dates">{role.title}</span>
            <h3>{role.cardSubtitle}</h3>
            <p className="experience-preview-company">{role.cardTitle}</p>
            <ul className="experience-preview-points">
              {role.cardDetailedText.map((bullet) => (
                <li key={bullet}>{stripBullet(bullet)}</li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
);
