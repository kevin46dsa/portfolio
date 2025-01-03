import {
  ProjectsHomeComponent,
  ProjectsNewHomeComponent,
} from "../../Components";

export const Projects = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <br />
        <h1>My Projects</h1>
        <br />
        <ProjectsHomeComponent />
        <br />
        <ProjectsNewHomeComponent />
      </div>
    </>
  );
};
