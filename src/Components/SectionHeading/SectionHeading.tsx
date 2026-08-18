import { Link } from "react-router-dom";
import "./SectionHeading.css";

type SectionHeadingProps = {
  title: string;
  /** Omit when the section fans out to multiple destinations rather than
   * one clear target -- renders plain heading text instead of a link. */
  to?: string;
  eyebrow?: string;
};

export const SectionHeading = ({ title, to, eyebrow }: SectionHeadingProps) => (
  <div className="section-heading">
    {eyebrow && <p className="section-heading-eyebrow">{eyebrow}</p>}
    <h2 className="section-heading-title">
      {to ? (
        <Link to={to} className="section-heading-link">
          {title}
          <span className="section-heading-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      ) : (
        title
      )}
    </h2>
  </div>
);
