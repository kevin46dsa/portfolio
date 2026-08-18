import { Hero, ProjectsPreview, ExperiencePreview, AboutPreview, HobbiesPreview } from "../Landing";

export const Home = () => (
  <div className="landing-page">
    <Hero />
    <ProjectsPreview />
    <ExperiencePreview />
    <AboutPreview />
    <HobbiesPreview />
  </div>
);
