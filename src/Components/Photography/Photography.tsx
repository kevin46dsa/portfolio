import { useMemo, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import {
  Album1,
  Album2,
  Album3,
  Album4,
  FeaturedPhotos,
  type Photo,
} from "../../Constants/PhotographyData";
import { MosaicGrid } from "./MosaicGrid";
import { Lightbox } from "./Lightbox";
import "./Photography.css";

type Album = {
  key: string;
  title: string;
  subtitle?: string;
  tag?: string; // e.g. “USA”, “Street”, “Nature”
  emoji?: string; // optional accent
  photos: Photo[];
  maxDisplayed: number;
};

type LightboxState = {
  photos: Photo[];
  index: number;
  altPrefix: string;
};

export const Photography: React.FC = () => {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);

  const albums: Album[] = useMemo(
    () => [
      {
        key: "a1",
        title: "17-Mile Drive",
        subtitle: "pictures from 17-Mile Drive",
        tag: "California",
        emoji: "🏞️",
        photos: Album1 as Photo[],
        maxDisplayed: 3,
      },
      {
        key: "a2",
        title: "Time Square",
        subtitle: "City moments, lines, and light",
        tag: "New York",
        emoji: "🏙️",
        photos: Album2 as Photo[],
        maxDisplayed: 3,
      },
      {
        key: "a3",
        title: "Fisherman's Wharf",
        subtitle: "pictures from san francisco",
        tag: "California",
        emoji: "🌊",
        photos: Album3 as Photo[],
        maxDisplayed: 5,
      },
      {
        key: "a4",
        title: "Nature & Quiet",
        subtitle: "Parks, trails, and details",
        tag: "Outdoors",
        emoji: "🌳",
        photos: Album4 as Photo[],
        maxDisplayed: 5,
      },
    ],
    []
  );

  return (
    <div className="photography-page">
      {/* Hero */}
      <section className="photography-hero">
        <h1 className="photography-title">Photography</h1>
        <p className="photography-tagline">
          moments, places, and light — a few favorites
        </p>
      </section>

      <Container>
        <section className="photography-featured">
          <h2 className="photography-featured-title">Featured</h2>
          <div data-testid="featured-mosaic">
            <MosaicGrid
              photos={FeaturedPhotos}
              altPrefix="Featured"
              size="featured"
              onTileClick={(index) =>
                setLightbox({ photos: FeaturedPhotos, index, altPrefix: "Featured" })
              }
            />
          </div>
        </section>

        <hr className="album-divider" />

        {/* two cards per row on md+, one per row on mobile */}
        <Row className="g-4">
          {albums.map((album) => (
            <Col key={album.key} xs={12} md={6}>
              <Card className="album-card">
                <Card.Body className="album-header">
                  <div className="album-heading">
                    <h2 className="album-title">
                      {album.title}{" "}
                      {album.emoji && (
                        <span aria-hidden="true">{album.emoji}</span>
                      )}
                    </h2>
                    {album.subtitle && (
                      <p className="album-subtitle">{album.subtitle}</p>
                    )}
                  </div>
                  {album.tag && (
                    <Badge bg="light" text="dark" className="album-badge">
                      {album.tag}
                    </Badge>
                  )}
                </Card.Body>

                <div className="album-collage">
                  <MosaicGrid
                    photos={album.photos}
                    maxTiles={album.maxDisplayed}
                    altPrefix={album.title}
                    onTileClick={(index) =>
                      setLightbox({ photos: album.photos, index, altPrefix: album.title })
                    }
                  />
                </div>

                <Card.Footer className="album-footer">
                  <span className="album-meta">
                    {album.photos.length} photos
                  </span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          initialIndex={lightbox.index}
          altPrefix={lightbox.altPrefix}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
};
