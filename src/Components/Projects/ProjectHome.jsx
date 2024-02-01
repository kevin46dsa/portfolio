import React, { useState,useEffect } from 'react';
import { octokit } from '../../octokit';
import './Projects.css'
import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/esm/Col";
import {Carousel,Button,Modal } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { projectData } from '../../TempProjectData';



const Projects = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);
  
   
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





  return (<div style={{textAlign: "center"}}>
        <br/>
        
        <h1>My Projects</h1>
        <br/>
        
        <Container fluid="xxl">
        {projectData.map((project,index)=>(
          <div style={{backgroundColor: '#F5F5F5', padding:"40px", margin:"40px" , boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)"}}>
          <Row key={index} >
            

            <Col style={{padding:"40px"}} >
            <div style={{ alignItems:"center"}}>
            <h2>{project.projectName}</h2>
            <p>{project.projectDescription}</p>
            {project.githubLink === "" ? null:<Button variant="primary" target="_blank" href={project.githubLink} >Open Github</Button> }{'   '}
            {project.websitePage === "" ? null:<Button variant="primary" target="_blank" href={project.websitePage}>View Project</Button> }{'   '}
            {/*
            <Button variant="primary" onClick={handleShow}>Read More</Button>
            */}
            </div>
            </Col>
           
           
            <Col>
            <Carousel fade>
            <Carousel.Item>
                <img style={{height: "275px"}}
                src={project.slide1}
                alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{height: "275px"}}
                src={project.slide2}
                alt="First slide"/>
            </Carousel.Item>
            </Carousel>
            
        
        
     
            </Col>
           
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
      
      </Row>
      </div>
        ))
        }  
     </Container>  
  </div>
  );
};

export default Projects;


