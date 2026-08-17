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

  return (
    <div className={`mosaic-grid mosaic-grid-${size}`}>
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
  );
};
