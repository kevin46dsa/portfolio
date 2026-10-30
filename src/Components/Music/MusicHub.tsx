import { FaSpotify } from "react-icons/fa6";
import { EquiNosVideos, NoisyNosBanner } from "../../Constants/NoisyNosData";
import { ContentTile } from "../ContentTile";
import { RevealGroup, RevealItem } from "../Reveal";
import "./MusicHub.css";

// EquiNosVideos is oldest-first, so the newest three are the tail, reversed.
const latestSets = EquiNosVideos.slice(-3).reverse();

export const MusicHub = () => (
  <div className="music-hub-page">
    <section className="music-hub-hero">
      <div className="music-hub-inner">
        <p className="music-hub-eyebrow">Beyond the code</p>
        <h1 className="music-hub-title">Music</h1>
        <p className="music-hub-tagline">
          House sets as Noisy Nos, plus the playlists on repeat.
        </p>
      </div>
    </section>

    <div className="music-hub-inner music-hub-section">
      <RevealGroup className="music-hub-grid">
        <RevealItem direction="up">
          <ContentTile
            title="Noisy Nos"
            teaser="DJ mixes and live sets"
            image={NoisyNosBanner}
            imagePosition="22% center"
            to="/music/noisynos"
          />
        </RevealItem>
        <RevealItem direction="up">
          <ContentTile
            title="Playlists"
            teaser="What I'm listening to on Spotify"
            icon={<FaSpotify color="#1DB954" />}
            to="/music/playlists"
          />
        </RevealItem>
      </RevealGroup>
    </div>

    <section className="music-hub-inner music-hub-section">
      <h2 className="music-hub-latest-title">Latest sets</h2>
      <RevealGroup className="music-hub-latest">
        {latestSets.map(({ videoId, title }) => (
          <RevealItem key={videoId} direction="up">
            <a
              className="music-hub-set"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                alt=""
                loading="lazy"
              />
              <span>{title}</span>
            </a>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  </div>
);
