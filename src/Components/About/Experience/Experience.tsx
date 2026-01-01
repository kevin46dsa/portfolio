// @ts-ignore
import { Chrono } from "react-chrono";

const experienceData = [
  {
    title: "Mar 2024 – Present",
    cardTitle: "CharacterStrong · Tacoma, WA · Remote",
    cardSubtitle: "Full Stack Developer",
    cardDetailedText: [
      "- Built Elasticsearch ingest pipelines, transforms, and optimized queries to enhance real-time analytics and ensure accurate reporting in high-volume data environments.",
      "- Engineered enterprise-grade authentication solutions by integrating SSO with OAuth 2.0 and SAML, improving login efficiency by 20% while ensuring compliance and robust data security.",
      "- Led secure migration from shared accounts to individual user accounts, safeguarding PII and improving personalized access in compliance with security standards.",
      "- Leveraged TanStack virtualization to optimize rendering of 1,000+ row datasets, reducing financial dashboard load times by 30% and improving user experience.",
      "- Enhanced backend scalability by optimizing PostgreSQL queries, cutting API latency and improving system reliability.",
      "- Automated deployment of AWS Lambda and Step Functions with Pulumi, managing S3 buckets and DynamoDB tables to support high-availability enterprise workloads.",
      "- Applied Vitest for rigorous testing, ensuring production-grade code quality and minimizing defects in critical systems.",
      "- Drove Agile sprints using Jira to track deliverables and ensure timely delivery of features aligned with stakeholder priorities.",
    ],
  },
  {
    title: "Jun 2023 – Mar 2024",
    cardTitle: "At Last Sportswear, Inc. · Secaucus, NJ · On-site",
    cardSubtitle: "Software Developer",
    cardDetailedText: [
      "- Redesigned website UI in React and refactored architecture, contributing to ~30% increase in sales.",
      "- Improved site performance ~15% using AWS load balancing and traffic management.",
      "- Built REST APIs with Node.js/Express; integrated ERP for smoother ops and ~20% faster flows.",
      "- Migrated data to MongoDB, achieving ~50% faster data retrieval.",
      "- Stack: React, Node.js/Express, AWS (ALB/EC2), MongoDB.",
    ],
  },
  {
    title: "Jan 2023 – Jun 2023",
    cardTitle: "Stevens Institute of Technology · Hoboken, NJ · Hybrid",
    cardSubtitle: "Graduate Teaching Assistant — CS546 Web Programming",
    cardDetailedText: [
      "- Supported graduate-level web programming course; led labs, graded, and mentored students.",
      "- Collaborated with course instructor (Prof. Patrick Hill) on curriculum and project guidance.",
      "- Skills: JavaScript/TypeScript, Node.js, React, Git/GitHub, SQL.",
    ],
  },
  {
    title: "Jun 2019 – Jul 2019",
    cardTitle: "Adani Electricity · Mumbai, India",
    cardSubtitle: "Java Web Developer Intern",
    cardDetailedText: [
      "- Implemented 'Customer Out-calling' module for bill distribution verification.",
      "- Built JSP/Servlet features and integrated with MySQL for persistence.",
      "- Skills: Java, JSP/Servlets, MySQL.",
    ],
  },
];

export function Experience() {
  return (
    <div className="experience-container">
      <h3 className="about-experience-heading">
        <strong className="purple">Experience</strong>
      </h3>
      <Chrono
        items={experienceData}
        mode="VERTICAL_ALTERNATING"
        disableToolbar
        theme={{
          // Brand accents
          primary: "#000000",
          // secondary: "#000000",

          // Card styling
          cardBgColor: "#ffffff",
          cardTitleColor: "#111111",
          cardSubtitleColor: "#6b7280", // subtle gray
          cardDetailsColor: "#1f2937",

          // Timeline titles (the text on the line)
          titleColor: "#111111",
          titleColorActive: "#000000",

          // Icons & controls
          iconColor: "#000000",
          iconBackgroundColor: "#ffffff",
          toolbarBgColor: "#ffffff",
          toolbarBtnBgColor: "#ffffff",
          toolbarTextColor: "#111111",

          // Interactions
          buttonBorderColor: "#e5e7eb",
          buttonHoverBgColor: "#f3f4f6",
          buttonHoverBorderColor: "#111111",
          buttonActiveBgColor: "#000000",
          buttonActiveIconColor: "#ffffff",

          // Effects
          shadowColor: "rgba(0, 0, 0, 0.08)",
          glowColor: "rgba(0, 0, 0, 0.15)",

          // Layout
          timelineBgColor: "#ffffff",
          textColor: "#111111",
        }}
      />
    </div>
  );
}
