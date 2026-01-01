import React, { useRef } from "react";
import VideoCard from "../Music/MusicSetComponents/VideoCard";
import "./HorizontalScrollerStyles.css";

interface HorizontalScrollerProps {
  videos: {
    videoId: string;
    title: string;
    duration?: string;
    href?: string;
  }[];
  sectionTitle: string;
}

export default function HorizontalScroller(props: HorizontalScrollerProps) {
  const { videos = [], sectionTitle = "Featured Videos" } = props;
  const scrollerRef = useRef<HTMLDivElement>(null);

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;

    // If the user is using a vertical wheel, horizontalize it
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault(); // keep the page from scrolling
      el.scrollLeft += e.deltaY; // move horizontally by the vertical delta
    }
  };

  return (
    <div
      className="horizontal-scroller-container-main"
      style={{
        ["--hs-card-w" as any]: "320px",
        ["--hs-card-h" as any]: "250px",
      }}
    >
      <div className="horizontal-scroller-container-title">
        <h2>{sectionTitle}</h2>
      </div>

      <div className="horizontal-scroller-container-content">
        <div
          className="horizontal-scroller-container-content-inner"
          ref={scrollerRef}
          onWheel={onWheel} // ← enables mouse wheel horizontal scroll on hover
        >
          {videos.map((video) => (
            <VideoCard
              key={video.videoId}
              videoId={video.videoId}
              title={video.title || ""}
              duration={video.duration || ""}
              href={video.href || ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
