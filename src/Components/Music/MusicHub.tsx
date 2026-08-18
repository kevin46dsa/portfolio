import { FaSpotify } from "react-icons/fa6";
import { NoisyNosBanner } from "../../Constants/NoisyNosData";
import { ContentTile } from "../ContentTile";
import { RevealGroup, RevealItem } from "../Reveal";
import "./MusicHub.css";

export const MusicHub = () => (
  <div className="music-hub-page">
    <section className="music-hub-hero">
      <h1 className="music-hub-title">Music</h1>
      <p className="music-hub-tagline">DJ sets, mixes, and playlists</p>
    </section>

    <div className="music-hub-inner">
      <RevealGroup className="music-hub-grid">
        <RevealItem direction="up">
          <ContentTile
            title="NoisyNos"
            teaser="DJ sets, mixes, and music videos under Noisy Nos."
            image={NoisyNosBanner}
            imagePosition="22% center"
            to="/music/noisynos"
          />
        </RevealItem>
        <RevealItem direction="up">
          <ContentTile
            title="Playlists"
            teaser="Curated Spotify playlists across house, R&B, and more."
            icon={<FaSpotify color="#1DB954" />}
            to="/music/playlists"
          />
        </RevealItem>
      </RevealGroup>
    </div>
  </div>
);
