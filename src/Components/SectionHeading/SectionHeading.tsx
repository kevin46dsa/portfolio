import { Link } from "react-router-dom";
import "./SectionHeading.css";

type SectionHeadingProps = {
  title: string;
  to: string;
  eyebrow?: string;
};

export const SectionHeading = ({ title, to, eyebrow }: SectionHeadingProps) => (
  <div className="section-heading">
    {eyebrow && <p className="section-heading-eyebrow">{eyebrow}</p>}
    <h2 className="section-heading-title">
      <Link to={to} className="section-heading-link">
        {title}
        <span className="section-heading-arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </h2>
  </div>
);
