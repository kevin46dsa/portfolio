import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row ,Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState(null);
    const [link, setLink] = useState(null);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

      const getFormattedData = (node) => {
       let tag = document.createElement("div")
        tag.innerHTML = node;
        node = tag.innerText;
        return node

      };


    const getPostData = () => {
      axios
        .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kevin0108dsa")
        .then((res) => {
          setImage(res.data.feed.image)
          setLink(res.data.feed.link)   
          setPosts(res.data.items);
          
        })
        .catch((error) => {
          console.error("Error fetching blog posts:", error);
        });
    };
    useEffect(() => {
      getPostData();
    }, []);

    console.log(posts[0])
    //<p dangerouslySetInnerHTML={{ __html: post.content }} />

    return (
        <div>
            <br/>
            <br/>
            <Container fluid>
            {posts.map((post) => (
            <div>  
            <Row key={post.guid}>
            <Col lg="2"></Col>   
            <Col style={{backgroundColor: '#F5F5F5', padding:"40px", margin:"20px" , boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)"}}>
            <Card className="text-center" >
            <Card.Header style={{fontWeight:"bold", fontSize:"36px"}}>{post.title}</Card.Header>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                {getFormattedData(post.description.substring(0,750))}...
              </Card.Text>
              <Button variant="primary" onClick={()=>openInNewTab(`${post.link}`)}>Read More</Button>
              <br/>
              <br/>
              {post.categories.map((categories)=>(
                <><span class="badge bg-light text-dark">{categories}</span>{"  "}</>
              ))}
              
            </Card.Body>
            <Card.Footer className="text-muted">Author:{post.author} {post.pubDate}</Card.Footer>
            </Card>
            </Col>
            <Col lg="2"></Col>
            </Row>
            </div>
                ))}
            </Container>
        
      </div>
    );
  };
  export default Blog;