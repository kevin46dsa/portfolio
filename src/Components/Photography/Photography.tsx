import React from "react";
import { ReactPhotoCollage } from "react-photo-collage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/esm/Col";

let photos1 = [
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01349.JPG?alt=media&token=2ceedfc6-3389-41a0-bff4-df4a13b0d09b",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01230.JPG?alt=media&token=52f564bd-b03c-49ad-93a6-878caa193f3d",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01360.jpg?alt=media&token=e4c1b3f1-0818-42e7-9d23-a8e291cfb218",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01367.jpg?alt=media&token=c7468f0e-53cd-42cb-a233-451e31f3b695",
  },
];
let photos2 = [
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/5881521D-AD65-49B2-89DA-54525A579AEC.jpeg?alt=media&token=4d551ca9-facd-4204-85ae-81b34d4d3c2d",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/IMG_0501.JPG?alt=media&token=583b5097-1c5c-4e10-8424-7b742a98f106",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC00845.JPG?alt=media&token=6670eb92-883a-412a-95eb-684d23be1c0d",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/IMG_0311.jpg?alt=media&token=d586b3b1-bcf3-4b0d-a280-153d3463a4a2",
  },
];
let photos3 = [
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/IMG_0636.jpg?alt=media&token=152bcea4-8003-4b48-b6aa-8db42c11103b",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01075.JPG?alt=media&token=2de255c4-ac6e-4a38-b5d6-18b6e5d848d5",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC01084.JPG?alt=media&token=5fd2f029-cb8f-4ee7-a8bc-8e3b74f2ac8a",
  },
  {
    source:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-235df.appspot.com/o/DSC00271.jpg?alt=media&token=8c889e09-2e6f-42cd-8f49-0217615b2d97",
  },
];

interface PictureSet {
  source: string;
}

/**
 * Helpers to set up the collage
 *
 * @param  PictureSet - array of pictures
 * @param  maxDisplayed - max number of pictures to display
 * @returns
 */
function settings(PictureSet: PictureSet[], maxDisplayed: number) {
  return {
    width: "100%",
    height: ["300px", "300px"],
    layout: [1, maxDisplayed],
    photos: PictureSet,
    showNumOfRemainingPhotos: true,
  };
}
export const Photography = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Here is a gallery of all my photos
      </h1>
      <br />
      <h2 style={{ textAlign: "center" }}>
        USA{" "}
        <span role="img" aria-label="United States Flag">
          🇺🇸
        </span>
      </h2>
      <Container>
        <Row>
          <Col>
            <ReactPhotoCollage {...settings(photos1, 4)} />
          </Col>
        </Row>
      </Container>
      <br />
      <Container>
        <Row>
          <Col>
            <ReactPhotoCollage {...settings(photos2, 2)} />
          </Col>
          <Col>
            <ReactPhotoCollage {...settings(photos3, 2)} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
