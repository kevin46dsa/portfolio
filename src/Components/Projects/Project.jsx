import React, { useState,useEffect } from 'react';
import { octokit } from '../../octokit';

import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/esm/Col";
import { Card, Carousel,Button,Modal , ButtonGroup} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { projectData } from '../../TempProjectData';


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





  return (<div style={{textAlign: "center"}}>
        <br/>
        <h1>My Projects</h1>
        <br/>
        
        
  </div>
  );
};

export default Projects;


