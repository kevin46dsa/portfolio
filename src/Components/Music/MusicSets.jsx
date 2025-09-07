import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import SocialLink from "../SocialLinks/SocialLinks";
import Slider from "./MusicSetComponents/Slider";
import { PageNotFound } from "../Pagenotfound";
import HorizontalScroller from "../HorizontalScroller/HorizaontalScroller";
export default function MusicSets() {
  const underConstruction = false;
  const videos = [
    {
      videoId: "p2PfSt1OjQQ",
      title: "EquiNos Ep 1 - Ben Bohmer, Cubicolor......",
    },
    {
      videoId: "dm_knHz_Fxg",
      title: "EquiNos Ep 2 - Nox Vahn, Gallago, Lane 8, Jimpster......",
    },
    {
      videoId: "7myYo-G8gnU",
      title: "EquiNos Ep 3 - Ben Bohmer, Nox Vahn, Tone Depth......",
    },
    {
      videoId: "6hkZCRllXoQ",
      title: "EquiNos Ep 4 - Ben Bohmer, Tinlicker, lane 8.....",
    },
    {
      videoId: "2BSXk4N2Mc4",
      title:
        "EquiNos EP 5 - Jody Wisternoff, Luca Musto, Franky Wah.... || Deep House Set",
    },
    {
      videoId: "6Y8Tl2Az_wQ",
      title:
        "EquiNos EP 6 - CamelPhat, Sultan + Shepherd, Pig & Dan || Deep House Set",
    },
    {
      videoId: "l7vbh0SPYUk",
      title:
        "EquiNos x Woulö EP 7 - Above and Beyond, Luttrel, Yotto.... || Guest Mix by Woulö|| Deep House Set",
    },
    {
      videoId: "rKLQEDJoFbI",
      title:
        "EquiNos EP 8 - Eelke Kleijn, Marsh, Fingerprint & Spencer Brown.... || Deep House ||",
    },
  ];

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
        {/*}
        <Row>
          <Col>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bMa2UrmFG_M?si=4TuuuLL8EIdppsBH"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        */}
        <br />
        <Row>
          <HorizontalScroller videos={videos} sectionTitle="EquiNos Episodes" />
        </Row>
      </Container>
    </div>
  );
}
