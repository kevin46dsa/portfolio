import React from 'react';
import Button from 'react-bootstrap/Button';
import Typewriter from 'typewriter-effect';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import "./Home.css"
import kevimg from "../Assets/profilephoto.png"
import QRcode from "../Assets/kevindsa.png"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Stack from 'react-bootstrap/Stack';
//<Image src={kevimg} style={{height:"500px"}}  />

const Home = () => {
  return (
  <div style={{height:"100vh"}}>
    <div >
        <br/>
        <br/>
        <Container fluid>
        <Row>
          <Col lg="1"></Col>
          <Col sm="12" md="12" lg="5" className='d-flex  justify-content-center flex-column align-items-center'>
            <div >
            <Image src={kevimg} className="img-fluid" style={{ maxHeight: "525px"}} alt="Responsive Image" />
            </div>
          </Col>
          <Col sm="12" md="12" lg="5" className='d-flex  justify-content-center flex-column align-items-center'>

          <div >
          <br/>
          <h1 style={{fontWeight:"bold",fontFamily:"monospace"}}>
          <Typewriter
            options={{
            strings: ["Hi, I Am Kevin D'sa !!", 'Welcome To My Website !!!',"Follow Me On Other Platforms", "Scan The QR Code Below !!"],
            autoStart: true,
            loop: true,
            }}
          />
          </h1>
          <br/>
          </div>
          
          <div className='qrCode'>
          <Image src={QRcode} className="img-fluid shadow p-3 mb-2 bg-white rounded" style={{ maxHeight: "350px" }} alt="Responsive Image" />
          </div>
          <br/>
          <br/>
          <div >
          <Stack direction="horizontal" gap={3}>
      
      <Button variant="secondary" size="lg" href='/about'>About Me</Button>
      <div className="vr" />
      
      <OverlayTrigger
          key='top'
          placement='top'
          overlay={
            <Tooltip id={`tooltip-top`}>
              This Page may require you to solve reCAPTCHA, for security reasons
            </Tooltip>
          }
        >
         <Button variant="secondary" size="lg" href='/resume'>Resume</Button>
        </OverlayTrigger>
      <div className="vr" />
      <Button variant="secondary" size="lg" href='/projects'>Projects</Button>
    </Stack>
    <br/>
    <br/>
        </div>
      </Col>
      <Col lg="1"></Col>
        </Row>
       
        </Container>
       
  </div>
  </div>
  );
};

export default Home;