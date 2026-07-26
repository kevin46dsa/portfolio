export const aboutSummary = {
  heading: "Hello My Name Is Kevin",
  teaser:
    "I’m a FullStack Developer with over 4+ years of experience building scalable, user-focused web applications. I also recently earned my Master’s degree in Computer Science from Stevens Institute of Technology.",
};

export const AboutCard = () => {
  return (
    <>
      <h2>{aboutSummary.heading}</h2>
      <p>
        I’m a <strong>FullStack Developer</strong> with over 4+ years of
        experience building scalable, user-focused web applications. I also
        recently earned my Master’s degree in Computer Science from Stevens
        Institute of Technology.
      </p>
      <p>
        I’m passionate about turning ideas into intuitive, high-performing
        software. Whether I’m architecting backend systems, or collaborating in
        agile teams, I strive to create solutions that are both elegant and
        impactful.
      </p>
    </>
  );
};
