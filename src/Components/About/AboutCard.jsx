import React from 'react';
import Card from 'react-bootstrap/Card';

function AboutCard() {

    
    
    
    return (
		<Card >
			<Card.Body>
				
					<h3>Hello Guys My Name Is Kevin</h3>
                    <br/>
                    
                    <p style={{ textAlign: 'justify' }}>
                    I am a full stack developer currently pursuing a Master's Degree in Computer Science at Stevens Institute of Technology, 
                    <br/>
                    <br/>
                   
                    I am constantly seeking new and exciting ways to channel my creativity and technical skills. I am driven by a passion for innovation and the desire to create meaningful experiences for users.
                    <br/>
                    <br/>
                    
                    Outside of my work, I indulge in a variety of hobbies and interests, including photography, basketball, and exploring the great outdoors. I find inspiration in the beauty of nature and the thrill of adventure. When I'm not tinkering with code or shooting hoops, I'm often found exploring the world of cars, delving into their inner workings and design features. My diverse range of interests and insatiable curiosity make me a unique and multifaceted.
					</p>
					<br/>
                    <br/>
                    <br/>
                    
                    <blockquote className="blockquote mb-0">
					<p style={{}}>
						"Anything's possible, you gotta dream like you never seen Obstacles"{' '}
					</p>
					<footer className="blockquote-footer">J. Cole</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;