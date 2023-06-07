import React, { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";
import { Card, Carousel,Button,Modal } from 'react-bootstrap';


const Projects = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  return (<div>
        <h1>My Projects</h1>
        <br/>
        <Container className=''>
          <Row>
            <Col>
            <Card>
            <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                alt="First slide"/>
            <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
                alt="First slide"/>
            </Carousel.Item>
            </Carousel>
            <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href='https://github.com/kevin46dsa'>Open Github</Button>
        <Button variant="primary" onClick={handleShow}>
        Read More
      </Button>
      </Card.Body>
                </Card>
            </Col>
          </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project 1</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png"
            alt="First slide"/>
        Woohoo, you are reading this text in a modal!
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        
  </div>
  );
};

export default Projects;