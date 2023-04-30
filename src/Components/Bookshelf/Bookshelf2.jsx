import React from "react";
import GoodreadsBookshelf from "react-goodreads-shelf";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Bookshelf2() {
  return (
    <div className='bookshelf-page'>
    <h1 style={{textAlign:"center"}}>Welcome to my Bookshelf</h1>  
    <Container>
    <Row>
    <h2>Currently Reading</h2>
    <br/>
    <GoodreadsBookshelf   shelf="currently-reading"   userId="164565714"  displayOptions="" subtitle={undefined}/>
    </Row>
    <Row>
    <h2>Finished</h2>
    <br/>
    <GoodreadsBookshelf   shelf="read"   userId="164565714"  />
    </Row>
    <Row>
    <h2>To Read</h2>
    <br/>
    <GoodreadsBookshelf   shelf="to-read"   userId="164565714" />
    </Row>
    </Container>
    </div>
  );
}