import { FeaturedPhotos } from "../../../Constants/PhotographyData";
import { NoisyNosBanner } from "../../../Constants/NoisyNosData";
import defaultBlogImage from "../../../Assets/defaultblogimg.jpeg";
import { SectionHeading } from "../../SectionHeading";
import { SectionDivider } from "../../SectionDivider";
import { RevealGroup, RevealItem } from "../../Reveal";
import { ContentTile } from "../../ContentTile";
import "./HobbiesPreview.css";

type Hobby = {
  key: string;
  title: string;
  teaser: string;
  image?: string;
  imagePosition?: string;
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
    imagePosition: "22% center",
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
        {hobbies.map((hobby) => (
          <RevealItem key={hobby.key} direction="up">
            <ContentTile
              title={hobby.title}
              teaser={hobby.teaser}
              image={hobby.image}
              imagePosition={hobby.imagePosition}
              to={hobby.to}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  </section>
);
