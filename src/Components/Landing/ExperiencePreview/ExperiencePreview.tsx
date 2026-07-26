import { experienceData } from "../../About/Experience";
import { SectionHeading } from "../../SectionHeading";
import { SectionDivider } from "../../SectionDivider";
import { RevealGroup, RevealItem } from "../../Reveal";
import "./ExperiencePreview.css";

const recentRoles = experienceData.slice(0, 2);

// A one-line taste of impact per role, without turning this condensed preview
// into a full resume dump -- the complete bullet list stays exclusive to the
// react-chrono timeline on /about.
const firstHighlight = (bullets: string[]) => bullets[0]?.replace(/^-\s*/, "");

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
            <p className="experience-preview-highlight">{firstHighlight(role.cardDetailedText)}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
);
