import { Link } from "react-router-dom";
import { FeaturedPhotos } from "../../../Constants/PhotographyData";
import { NoisyNosBanner } from "../../../Constants/NoisyNosData";
import defaultBlogImage from "../../../Assets/defaultblogimg.jpeg";
import { SectionHeading } from "../../SectionHeading";
import { SectionDivider } from "../../SectionDivider";
import { RevealGroup, RevealItem } from "../../Reveal";
import "./HobbiesPreview.css";

type Hobby = {
  key: string;
  title: string;
  teaser: string;
  image?: string;
  to?: string;
};

const hobbies: Hobby[] = [
  {
    key: "photography",
    title: "Photography",
    teaser: "I love capturing the world — landscapes, cities, and everything in between.",
    image: FeaturedPhotos[0].source,
    to: "/photography",
  },
  {
    key: "music",
    title: "Music — Noisy Nos",
    teaser: "Curating house sets and DJ mixes under Noisy Nos.",
    image: NoisyNosBanner,
    to: "/music",
  },
  {
    key: "blog",
    title: "Blog",
    teaser: "Thoughts on code, projects, and things I'm learning.",
    image: defaultBlogImage,
    to: "/blog",
  },
  {
    key: "travel",
    title: "Travel Journal",
    teaser: "Documenting my travels around the world — coming soon.",
  },
];

export const HobbiesPreview = () => (
  <section className="hobbies-preview-section">
    <div className="hobbies-preview-inner">
      <SectionDivider />
      <SectionHeading eyebrow="Beyond the Code" title="Hobbies" />
      <RevealGroup className="hobbies-preview-grid">
        {hobbies.map((hobby) => {
          const isComingSoon = !hobby.to;
          const content = (
            <>
              {hobby.image && (
                <img src={hobby.image} alt="" className="hobbies-preview-image" aria-hidden="true" />
              )}
              <div className="hobbies-preview-overlay" aria-hidden="true" />
              <div className="hobbies-preview-body">
                {isComingSoon && <span className="hobbies-preview-badge">Coming Soon</span>}
                <h3 className="hobbies-preview-title">{hobby.title}</h3>
                <p className="hobbies-preview-teaser">{hobby.teaser}</p>
                {!isComingSoon && (
                  <span className="hobbies-preview-link">
                    Explore
                    <span className="hobbies-preview-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                )}
              </div>
            </>
          );

          return (
            <RevealItem key={hobby.key} direction="up">
              {isComingSoon ? (
                <div
                  className="hobbies-preview-tile hobbies-preview-tile-soon"
                  aria-disabled="true"
                >
                  {content}
                </div>
              ) : (
                <Link to={hobby.to!} className="hobbies-preview-tile">
                  {content}
                </Link>
              )}
            </RevealItem>
          );
        })}
      </RevealGroup>
    </div>
  </section>
);
