import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import "./ContentTile.css";

type ContentTileProps = {
  title: string;
  teaser: string;
  /** Background photo. Omit and use `icon` instead for content with no
   * natural photo (e.g. a music-streaming service). */
  image?: string;
  /** object-position override -- a source image's focal point isn't always
   * centered, so `cover`'s default centered crop can hide the important part. */
  imagePosition?: string;
  /** Alternative to `image` -- a large centered icon on a dark background,
   * for content with no natural photo. Pass a pre-colored icon element
   * (e.g. `<FaSpotify color="#1DB954" />`) if it needs brand coloring. */
  icon?: ReactNode;
  /** Omit to render a disabled "Coming Soon" tile instead of a link. */
  to?: string;
};

export const ContentTile = ({
  title,
  teaser,
  image,
  imagePosition,
  icon,
  to,
}: ContentTileProps) => {
  const isComingSoon = !to;

  const content = (
    <>
      {image && (
        <img
          src={image}
          alt=""
          className="content-tile-image"
          aria-hidden="true"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      )}
      {!image && icon && (
        <div className="content-tile-icon-bg" aria-hidden="true">
          <span className="content-tile-icon">{icon}</span>
        </div>
      )}
      <div className="content-tile-overlay" aria-hidden="true" />
      <div className="content-tile-body">
        {isComingSoon && <span className="content-tile-badge">Coming Soon</span>}
        <h3 className="content-tile-title">{title}</h3>
        <p className="content-tile-teaser">{teaser}</p>
        {!isComingSoon && (
          <span className="content-tile-link">
            Explore
            <span className="content-tile-arrow" aria-hidden="true">
              →
            </span>
          </span>
        )}
      </div>
    </>
  );

  if (isComingSoon) {
    return (
      <div className="content-tile content-tile-soon" aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <Link to={to} className="content-tile">
      {content}
    </Link>
  );
};
