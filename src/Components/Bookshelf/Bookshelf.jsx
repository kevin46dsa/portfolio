import React from 'react';
import './Bookshelf.css';
import Artofwar from "../../Assets/artofwar.webp"
import Card from 'react-bootstrap/Card';
import BookCardDesign from './BookCardDesign';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col  from "react-bootstrap/Col";
const Bookshelf = () => {
  
  let currentlyReading = [
    {
        name:"Art of War",
        img:Artofwar
    },
    {
        name:"Book 2",
        img:Artofwar
    },
    {
        name:"Art of War",
        img:Artofwar
    },
    {
        name:"Book 2",
        img:Artofwar
    }
    
  ]

  let finishedReading = [
    {
        name:"Art of War",
        img:Artofwar
    },
    {
        name:"Book 2",
        img:Artofwar
    },
    {
        name:"Art of War",
        img:Artofwar
    },
    {
        name:"Book 2",
        img:Artofwar
    },
    
  ]
  





  if(finishedReading && currentlyReading){
    return(
        <div className='bookshelf-page'>
            <h1> Books I Am Currently Reading</h1>
            <Container>
                <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={4}>
                <BookCardDesign data={currentlyReading}/>
                </Row>
            </Container>
            <br/>
            <h1> Books I Have Finished Reading </h1>
            <Container>
                <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={4}>
                <BookCardDesign data={finishedReading}/>
                </Row>
            </Container>
        
        
        </div>
    )
  }
  
  
};

export default Bookshelf;