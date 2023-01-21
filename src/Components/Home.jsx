import React from 'react';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import "./Home.css"
import kevimg from "../Assets/1664229246147.jpeg"
import QRcode from "../Assets/kevindsa.png"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import Stack from 'react-bootstrap/Stack';

const Home = () => {
  return (
  <div>
    <div >
        <br/>
        <br/>
        <Container>
        <Row>
          <Col sm="12" md="12" lg="7"><Image src={kevimg} style={{height:"500px"}} className="shadow-lg p-3 mb-5 bg-white rounded"/></Col>
          <Col sm="12" md="12" lg="5" ><div>
          <h1>Kevin D'sa</h1>
          <h2>Welcome to my Website</h2>
          <br/>
          </div>
          <div className='qrCode'>
          <Image src={QRcode} style={{height:"375px"}} className="shadow-lg p-3 mb-5 bg-white rounded"/>
          </div>
          <div>
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
      <Button variant="secondary" size="lg" href='/project'>Projects</Button>
    </Stack>
    <br/>
    <br/>
        </div>
      </Col>
        </Row>
        </Container>
       
  </div>
  </div>
  );
};

export default Home;