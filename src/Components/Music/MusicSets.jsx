import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import SocialLink from "../SocialLinks/SocialLinks";
// import Slider from "./MusicSetComponents/Slider";
import { PageNotFound } from "../Pagenotfound";
import HorizontalScroller from "../HorizontalScroller/HorizaontalScroller";
import SplitVideoSection from "../SplitVideoSection/SplitVideoSection";
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
          <SplitVideoSection
            videoId="bMa2UrmFG_M"
            title="Pre Game Set || Noisynos || Diplo, Mochak...."
            description="Welcome to NoisyNos! 🎶 Dive into an epic musical journey with our latest playlist, filled with House tracks that will get you in the perfect mood. Whether you're chilling, working, or partying, this playlist has something for everyone!"
          />
        </Row>
        <br />
        <Row>
          <HorizontalScroller videos={videos} sectionTitle="EquiNos Episodes" />
        </Row>
        <br />
        <Row>
          <SplitVideoSection
            videoId="F2dL_MXy35o"
            title="sunday morning improvised || oliver heldens, fisher, durante ..."
            description="#relaxingbeats #chillvibes #cookingmusic
#spotifyplaylist2024  #musicmixing  #relaxingbeats  #chillvibes  #cookingmusic #subscribe #showerplaylist

Get into the groove with this energizing mix of tech-house and house beats! This playlist delivers the perfect balance of uplifting rhythms and smooth transitions, ideal for setting the vibe while you work, workout, or get ready to head out. Whether you’re looking to boost your energy or enjoy a steady flow of feel-good music, this mix has you covered.
"
            //videoSide="right"
          />
        </Row>
      </Container>
    </div>
  );
}
