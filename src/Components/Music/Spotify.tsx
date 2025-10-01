import { Container, Row, Col } from "react-bootstrap";

export default function Spotify() {
  const redirectToSpotify = () => {
    const url =
      "https://open.spotify.com/user/ib9bugf6icc5xd4kzc4rku8ot?si=1ad7a7e14a3f4347";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="Music-page">
      <br />
      <Container>
        {/* Main playlist: always full width */}
        <Row className="g-4">
          <Col xs={12}>
            <iframe
              title="main-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/46QwjZ8MHBsbH2DwRK6BG9?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>

      <br />

      <Container>
        {/* Header + CTA */}
        <Row className="align-items-center g-3">
          <Col xs={12} md={6} className="text-start">
            <h1 className="m-0">Check Out My Spotify Playlists</h1>
          </Col>
          <Col xs={12} md={6} className="text-md-end text-start">
            <button
              onClick={redirectToSpotify}
              style={{
                backgroundColor: "#1DB954",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "4px",
                padding: "8px 16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Follow me on Spotify
            </button>
          </Col>
        </Row>

        <br />

        {/* Playlists Grid — one per row on mobile, two per row >= md */}
        <Row className="g-4">
          <Col xs={12} md={6}>
            <iframe
              title="01-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3sIcxWGjlvyCFK3GVUQ9NH?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Col>

          <Col xs={12} md={6}>
            <iframe
              title="02-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2bErsRY1hKTIfFG7MJELlx?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Col>
        </Row>

        <br />

        <Row className="g-4">
          <Col xs={12} md={6}>
            <iframe
              title="03-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3JiN4XeIuApKDp4r1ck0So?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Col>

          <Col xs={12} md={6}>
            <iframe
              title="04-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1t9lv03DWz9jtLqmhAXxX9?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
