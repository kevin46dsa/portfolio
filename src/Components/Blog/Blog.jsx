import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row ,Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import reactWebcam from "../../Assets/react-webcam.jpg"
import crewai from "../../Assets/crewai.png"
import defaultImage from "../../Assets/defaultblogimg.jpeg"
import exceltemplate from "../../Assets/excel-template.png"


const Blog = () => {
    const [posts, setPosts] = useState([]);
   

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noreferrer");
      };

      const getFormattedData = (node) => {
       let tag = document.createElement("div")
        tag.innerHTML = node;
        node = tag.innerText;
        return node

      };

    const addImageToPost = (posts) => {
        
      for(let i in posts){
          if(posts[i].title === "React-Webcam Starts webcam but stops automatically")posts[i] = {...posts[i], 'thumbnail':reactWebcam}
          if(posts[i].title === "Create an AI workforce with CrewAI")posts[i] = {...posts[i], 'thumbnail':crewai}
          if(posts[i].title === "Monthly Budget Notepad/Tracker") posts[i] = {...posts[i], 'thumbnail':exceltemplate}
      }
      return posts
    }

    const getPostData = () => {
      axios
        .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kevin0108dsa")
        .then((res) => {
          addImageToPost(res.data.items) // adds the images to the posts since the thumbnail wasnt showing up
          setPosts(res.data.items);
          console.log(res.data.items)
        })
        .catch((error) => {
          console.error("Error fetching blog posts:", error);
        });
    };
    useEffect(() => {
      getPostData();
    }, []);

    //<p dangerouslySetInnerHTML={{ __html: post.content }} />  description comming in from the api call is unformatted html text this like makes it readable to the browser and makes it formatted

    return (
        <div>
            <br/>
            <br/>
            <Container fluid>
            {posts.map((post,index) => (
            <div key={index}>  
            <Row key={post.guid}>
            <Col lg="2"></Col>   
            <Col style={{backgroundColor: '#F5F5F5', padding:"40px", margin:"20px" , boxShadow:"0px 2px 4px rgba(0, 0, 0, 0.2)"}}>
            <Card className="text-center" >
            <Card.Header style={{fontWeight:"bold", fontSize:"36px"}}>{post.title}</Card.Header>
            <Card.Img variant="top" src={ post.thumbnail === "" ? defaultImage : post.thumbnail} />
            <Card.Body>
              
              <Card.Text>
                {getFormattedData(post.description.substring(0,350))}...
              </Card.Text>
              <Button variant="primary" onClick={()=>openInNewTab(`${post.link}`)}>Read More</Button>
              <br/>
              <br/>
              {post.categories.map((categories,index)=>(
                <><span className="badge bg-light text-dark" key={index}>{categories}</span>{"  "}</>
              ))}
              
            </Card.Body>
            <Card.Footer className="text-muted">Author:<a href="https://medium.com/@kevin0108dsa">{post.author}</a> &nbsp; &nbsp; &nbsp; &nbsp; {post.pubDate}</Card.Footer>
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