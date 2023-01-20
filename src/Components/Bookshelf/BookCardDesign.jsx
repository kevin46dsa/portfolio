import React from "react";
import Card from 'react-bootstrap/Card';
import Col  from "react-bootstrap/Col";

export default function BookCardDesign(props) {
  
  let card = null

  

	const buildCard= (book,index) =>{
		return(  
            <Col key={index} >
            <Card  style={{ marginTop:"10px", marginBottom:"10px", marginLeft:"5px", marginRight:"5px"}}>
            <Card.Img style={{height:"375px" }} variant="top" src={book.img} />
            <Card.Body>
            <Card.Title>{book.name}</Card.Title>
            </Card.Body>
            </Card>
            </Col>
		)
	} 


	// create cards 
	if(props.data){ 
		card = props.data.map((book,index)=>{
      return buildCard(book , index)
		})
		
	}
	

	return(
	    card	
	)

}