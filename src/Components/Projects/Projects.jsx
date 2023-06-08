import React, { useState,useEffect } from 'react';
import { octokit } from '../../octokit';
import './Projects.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";
import { Card, Carousel,Button,Modal } from 'react-bootstrap';



const Projects = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


  
   
   useEffect(() => {
    async function onLoad() {
      await octokit.request(
         'GET /repos/kevin46dsa/imagedetection/readme', {
            owner: 'kevin46dsa',
            repo: 'imagedetection',
       }).then(res => {
           //const encoded = res.data.content;
           //const decoded = atob(encoded);
           //setCode(decoded);
           console.log(res)
      }).catch(err => console.log(err));
   }
onLoad();
},[])



  return (<div>
        <h1 style={{textAlign:"center"}}>My Projects</h1>
        <br/>
        <Container className=''>
          <Row>
            <Col>
            <Card >
            <Carousel >
            <Carousel.Item>
                <img
                style={{ height: "300px" }}
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
            <Col>
            <Card>
        <Card.Body>
        <div class="scroll">
  
        # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

  </div>
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


