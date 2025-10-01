import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import reactWebcam from "../../Assets/react-webcam.jpg";
import crewai from "../../Assets/crewai.png";
import defaultImage from "../../Assets/defaultblogimg.jpeg";
import exceltemplate from "../../Assets/excel-template.png";

const CARD_MAX_WIDTH = 760; // keeps a nice readable width on larger screens
const THUMB_HEIGHT = 220; // consistent image height for all cards

export const Blog = () => {
  const [posts, setPosts] = useState<any[]>([]);

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  const getFormattedData = (node: string) => {
    const tag = document.createElement("div");
    tag.innerHTML = node;
    return tag.innerText;
  };

  const addImageToPost = (items: any[]) =>
    items.map((p) => {
      let thumbnail = p.thumbnail || "";
      if (p.title === "React-Webcam Starts webcam but stops automatically")
        thumbnail = reactWebcam;
      if (p.title === "Create an AI workforce with CrewAI") thumbnail = crewai;
      if (p.title === "Monthly Budget Notepad/Tracker")
        thumbnail = exceltemplate;
      return { ...p, thumbnail };
    });

  const getPostData = useCallback(() => {
    axios
      .get(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kevin0108dsa"
      )
      .then((res) => {
        const withImages = addImageToPost(res.data.items || []);
        setPosts(withImages);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  useEffect(() => {
    if (posts.length === 0) getPostData();
  }, [posts, getPostData]);

  return (
    <div>
      <br />
      <br />
      <Container fluid>
        <Row className="g-4 justify-content-center">
          {posts.map((post: any, index: number) => (
            <Col
              key={post.guid ?? index}
              xs={12}
              md={10}
              lg={8}
              xl={7}
              className="d-flex justify-content-center"
            >
              <Card
                className="text-center shadow-sm h-100 d-flex flex-column"
                style={{
                  width: "100%",
                  maxWidth: CARD_MAX_WIDTH,
                  backgroundColor: "#F5F5F5",
                  padding: 0,
                }}
              >
                {/* Title (clamped to 3 lines for consistent height) */}
                <Card.Header
                  style={{
                    fontWeight: "bold",
                    fontSize: "clamp(20px, 5vw, 32px)",
                    lineHeight: 1.2,
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    minHeight: "calc(1.2em * 3)", // reserves space for up to 3 lines
                  }}
                >
                  {post.title}
                </Card.Header>

                {/* Consistent thumbnail height */}
                <Card.Img
                  variant="top"
                  src={post.thumbnail ? post.thumbnail : defaultImage}
                  alt={post.title}
                  style={{
                    height: THUMB_HEIGHT,
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Body grows, footer stays at bottom */}
                <Card.Body className="d-flex flex-column">
                  {/* Description (clamped to 4 lines for consistency) */}
                  <Card.Text
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      textAlign: "left",
                      minHeight: "calc(1.5em * 4)",
                    }}
                  >
                    {getFormattedData(post.description.substring(0, 350))}…
                  </Card.Text>

                  <div className="mt-2 mb-3 text-start" style={{ gap: 8 }}>
                    {post.categories.map((c: string, i: number) => (
                      <span
                        className="badge bg-light text-dark me-1 mb-1"
                        key={i}
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Button
                      variant="primary"
                      onClick={() => openInNewTab(`${post.link}`)}
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>

                <Card.Footer className="text-muted">
                  Author:
                  <a href="https://medium.com/@kevin0108dsa" className="ms-1">
                    {post.author}
                  </a>
                  <span className="ms-3">{post.pubDate}</span>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
