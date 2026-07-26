import { Hero, ProjectsPreview, ExperiencePreview, AboutPreview } from "../Landing";

export const Home = () => (
  <div className="landing-page">
    <Hero />
    <ProjectsPreview />
    <ExperiencePreview />
    <AboutPreview />
  </div>
);
