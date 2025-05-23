import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import SocialLink from "../SocialLinks/SocialLinks";
import Slider from "./MusicSetComponents/Slider";
import { PageNotFound } from "../Pagenotfound";

export default function MusicSets() {
  const underConstruction = true;

  if (underConstruction) return <PageNotFound />;

  return (
    <div className="Music-page">
      <br />
      <Container>
        <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/Screenshot%202024-09-02%20at%202.59.55%E2%80%AFPM.png?alt=media&token=34ade7df-7cc7-4fdb-971b-dc1e80220698"
            alt="playlist"
          />
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <h1 style={{ textAlign: "center" }}>Check Out My Socials</h1>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center", paddingBottom: "10px" }}>
            <SocialLink variant="Youtube" />
            {"      "}
            <div className="vr" />
            {"      "}
            <SocialLink variant="Instagram" />
            {"      "}
            <div className="vr" />
            {"      "}
            <SocialLink variant="Mixcloud" />
            {"      "}
            <div className="vr" />
            {"      "}
            <SocialLink variant="Twitch" />
          </Col>
        </Row>
        <br />
        <Row>
          <Slider />
        </Row>
        <br />
        <Row>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
