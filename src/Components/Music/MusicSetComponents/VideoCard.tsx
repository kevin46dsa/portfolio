import React from "react";

interface VideoCardProps {
  videoId: string;
  title: string | undefined;
  duration: string | undefined;
  href: string | undefined;
}

export default function VideoCard(props: VideoCardProps) {
  const { videoId, title, duration, href } = props;
  const link = href || `https://www.youtube.com/watch?v=${videoId}`;
  const embed = `https://www.youtube.com/embed/${videoId}`;

  return (
    <article className="hs-card" tabIndex={-1}>
      <a
        className="hs-video"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${title || "video"} in a new tab`}
      >
        <iframe
          src={embed}
          title={title || "YouTube video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </a>

      <div className="hs-meta">
        <div className="hs-title" title={title}>
          {title || "Untitled"}
        </div>
        {duration ? <div className="hs-sub">{duration}</div> : <div />}
      </div>
    </article>
  );
}
