import { useEffect, useRef, useState } from "react";
import type { Photo } from "../../Constants/PhotographyData";
import "./MosaicGrid.css";

type MosaicGridProps = {
  photos: Photo[];
  /** Caps how many tiles render before folding the rest behind a "+N" overlay
   * on the last visible tile. Omit to show every photo as its own tile. */
  maxTiles?: number;
  altPrefix: string;
  onTileClick: (index: number) => void;
  size?: "compact" | "featured";
};

export const MosaicGrid = ({
  photos,
  maxTiles,
  altPrefix,
  onTileClick,
  size = "compact",
}: MosaicGridProps) => {
  const visible = maxTiles ? photos.slice(0, maxTiles) : photos;
  const remaining = photos.length - visible.length;

  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Only the featured variant becomes a swipeable filmstrip on mobile (see
  // MosaicGrid.css) with dot indicators tracking the centered card. Album
  // grids never render dots, so this observer is skipped for them entirely.
  useEffect(() => {
    if (size !== "featured") return;
    const container = containerRef.current;
    if (!container) return;

    const tiles = Array.from(container.querySelectorAll<HTMLElement>(".mosaic-tile"));
    if (tiles.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce((best, entry) =>
          entry.intersectionRatio > best.intersectionRatio ? entry : best
        );
        if (mostVisible.intersectionRatio > 0) {
          const idx = tiles.indexOf(mostVisible.target as HTMLElement);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      { root: container, threshold: [0.5, 0.75, 1] }
    );

    tiles.forEach((tile) => observer.observe(tile));
    return () => observer.disconnect();
  }, [size, visible.length]);

  return (
    <div>
      <div ref={containerRef} className={`mosaic-grid mosaic-grid-${size}`}>
        {visible.map((photo, index) => {
          const isLastVisible = index === visible.length - 1;
          const showOverlay = isLastVisible && remaining > 0;
          return (
            <button
              key={photo.source}
              type="button"
              className="mosaic-tile"
              data-testid="photo-tile"
              style={{ backgroundImage: `url(${photo.source})` }}
              aria-label={
                photo.alt ??
                `${altPrefix} photo ${index + 1}${showOverlay ? `, plus ${remaining} more` : ""}`
              }
              onClick={() => onTileClick(index)}
            >
              {showOverlay && (
                <span className="mosaic-tile-overlay" aria-hidden="true">
                  +{remaining}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {size === "featured" && (
        <div className="mosaic-dots" data-testid="mosaic-dots" aria-hidden="true">
          {visible.map((photo, index) => (
            <span
              key={photo.source}
              className={`mosaic-dot ${index === activeIndex ? "is-active" : ""}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
