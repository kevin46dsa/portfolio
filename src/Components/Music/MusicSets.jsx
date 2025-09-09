import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";
import SocialLink from "../SocialLinks/SocialLinks";
import HorizontalScroller from "../HorizontalScroller/HorizaontalScroller";
import SplitVideoSection from "../SplitVideoSection/SplitVideoSection";
import {
  EquiNosVideos,
  NoisyNosBanner,
  NoisyNosVideoHighlight1,
  NoisyNosVideoHighlight2,
} from "../../Constants/NoisyNosData";

export default function MusicSets() {
  return (
    <div className="Music-page">
      <br />
      <Container>
        <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
          <img src={NoisyNosBanner} alt="playlist" />
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
            videoId={NoisyNosVideoHighlight1.videoId}
            title={NoisyNosVideoHighlight1.title}
            description={NoisyNosVideoHighlight1.description}
          />
        </Row>
        <br />
        <Row>
          <HorizontalScroller
            videos={EquiNosVideos}
            sectionTitle="EquiNos Episodes"
          />
        </Row>
        <br />
        <Row>
          <SplitVideoSection
            videoId={NoisyNosVideoHighlight2.videoId}
            title={NoisyNosVideoHighlight2.title}
            description={NoisyNosVideoHighlight2.description}
          />
        </Row>
      </Container>
    </div>
  );
}
