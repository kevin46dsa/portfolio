import React, { useMemo } from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { Album1, Album2, Album3 } from "../../Constants";
import "./Photography.css";
import { Album4 } from "../../Constants/PhotographyData";

type Photo = { source: string; alt?: string };

type Album = {
  key: string;
  title: string;
  subtitle?: string;
  tag?: string; // e.g. “USA”, “Street”, “Nature”
  emoji?: string; // optional accent
  photos: Photo[];
  maxDisplayed: number;
};

function buildSettings(photos: Photo[], maxDisplayed: number) {
  return {
    width: "100%",
    height: ["240px", "240px"], // smaller, classier
    layout: [1, maxDisplayed], // first row 1 hero, second row grid
    photos,
    showNumOfRemainingPhotos: true,
  };
}

export const Photography: React.FC = () => {
  const albums: Album[] = useMemo(
    () => [
      {
        key: "a1",
        title: "17-Mile Drive",
        subtitle: "pictures from 17-Mile Drive",
        tag: "California",
        emoji: "🏞️",
        photos: Album1 as Photo[],
        maxDisplayed: 4,
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
        maxDisplayed: 3,
      },
      {
        key: "a4",
        title: "Nature & Quiet",
        subtitle: "Parks, trails, and details",
        tag: "Outdoors",
        emoji: "🌳",
        photos: Album4 as Photo[],
        maxDisplayed: 3,
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
        {/* two cards per row on md+, one per row on mobile */}
        <Row className="g-4">
          {albums.map((album) => {
            const settings = buildSettings(album.photos, album.maxDisplayed);
            return (
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
                    <ReactPhotoCollage {...settings} />
                  </div>

                  <Card.Footer className="album-footer">
                    <span className="album-meta">
                      {album.photos.length} photos
                    </span>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>

        <hr className="album-divider" />

        {/* room for future albums — you can add more with smaller maxDisplayed */}
        {/* Example for later:
        <Row className="g-4">
          <Col xs={12} md={6}> ...another album card... </Col>
          <Col xs={12} md={6}> ...another album card... </Col>
        </Row>
        */}
      </Container>
    </div>
  );
};
