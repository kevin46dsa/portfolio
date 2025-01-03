import { useMemo } from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import Container from "react-bootstrap/Container";
import { photographyData } from "../../Data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

export const Photography = () => {
  const photoCollageComponent = (photoSet: string, maxDisplayed: number) => {
    let photoDataSet: { source: string }[];

    switch (photoSet) {
      case "photos1":
        photoDataSet = photographyData.photos1;
        break;
      case "photos2":
        photoDataSet = photographyData.photos2;
        break;
      case "photos3":
        photoDataSet = photographyData.photos3;
        break;
      default:
        photoDataSet = photographyData.photos1;
        break;
    }

    const settings = {
      width: "100%",
      height: ["300px", "300px"],
      layout: [1, maxDisplayed],
      photos: photoDataSet,
      showNumOfRemainingPhotos: true,
    };

    return <ReactPhotoCollage {...settings} />;
  };

  return (
    <div style={{ height: "100vh" }}>
      <br />
      <h1 style={{ textAlign: "center" }}>Photo Studio</h1>
      <br />
      <h2 style={{ textAlign: "center" }}>
        USA{" "}
        <span role="img" aria-label="United States Flag">
          🇺🇸
        </span>
      </h2>
      <Container>
        <Row>
          <Col>{photoCollageComponent("photos1", 4)}</Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>{photoCollageComponent("photos2", 2)}</Col>
          <Col>{photoCollageComponent("photos3", 2)}</Col>
        </Row>
      </Container>
    </div>
  );
};
