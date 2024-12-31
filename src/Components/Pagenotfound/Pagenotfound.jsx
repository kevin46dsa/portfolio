import React from "react";
import "./Pagenotfound.css";
import pageNotFoundAnimation from "../../Assets/404animation.gif";
import { Button } from "react-bootstrap";

const PageNotFound = () => {
  return (
    <div className="pagenotfoundContainer">
      <h1 className="pagenotfoundH1">404: Page Not Found</h1>
      <img
        className="pagenotfoundImg"
        alt="Error 404: Page Not Found"
        src={pageNotFoundAnimation}
      />

      <Button href="/" className="pagenotfoundBtn">
        Go Back to HomePage
      </Button>
    </div>
  );
};

export default PageNotFound;
