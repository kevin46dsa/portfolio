import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

export default function Spotify() {
  const redirectToSpotify = () => {
    let url =
      "https://open.spotify.com/user/ib9bugf6icc5xd4kzc4rku8ot?si=1ad7a7e14a3f4347";
    window.open(url, "_blank");
  };

  return (
    <div className="Music-page">
      <br />
      <Container>
        <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
          <iframe
            title="main-playlist"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/46QwjZ8MHBsbH2DwRK6BG9?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <h1 style={{ textAlign: "left" }}>
              Check Out My Spotify Playlists
            </h1>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <button
              onClick={redirectToSpotify}
              style={{
                backgroundColor: "#1DB954",
                color: "#FFFFFF",
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
        <Row>
          <Col>
            <iframe
              title="01-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3sIcxWGjlvyCFK3GVUQ9NH?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>
          <Col>
            <iframe
              title="02-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/2bErsRY1hKTIfFG7MJELlx?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <iframe
              title="03-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/3JiN4XeIuApKDp4r1ck0So?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>

          <Col>
            <iframe
              title="04-playlist"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/1t9lv03DWz9jtLqmhAXxX9?utm_source=generator"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
