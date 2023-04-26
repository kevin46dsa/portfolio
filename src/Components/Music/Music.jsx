import React , {useState} from "react";
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/esm/Col";

export default function Music() {
    let fetchAccessToken = 0
    const [authtoken, setAuthToken] = useState("")
    const [authExpire, setAuthExpire] = useState(0)
    const [playlist, setPlaylist] = useState([])

if(fetchAccessToken){
    axios.post('https://accounts.spotify.com/api/token', 
    'grant_type=client_credentials&client_id=20fe325f60614767891177ba9d9c741e&client_secret=f602801107ad4d5c809115087e7e055d', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    })
    .then(function (response) {
      setAuthToken(response.data.access_token)
      setAuthExpire(response.data.expires_in)
    })
    .catch(function (error) {
      console.log(error);
    });
}

// call data
if(authtoken !== ""){
    axios.get('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V', {
      headers: {
        'Authorization': `Bearer ${authtoken}`
      }
    })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    }
    const redirectToSpotify = () => {
        window.location.href = 'https://open.spotify.com/user/ib9bugf6icc5xd4kzc4rku8ot?si=1ad7a7e14a3f4347';
      };
    return (
    <div className='Music-page'>

        <br/>
        <Container>
                <Row xs={1} sm={1} md={1} lg={1} xl={1} xxl={1}>
                <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/46QwjZ8MHBsbH2DwRK6BG9?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Row>
        </Container>
        <br/>
        <Container>
            <Row>
                
                <Col>
                    <h1 style={{textAlign:"right"}}>Check Out My Spotify Playlists</h1>
                </Col>
                <Col style={{textAlign:"right"}}>
                    <button onClick={redirectToSpotify} style={{ backgroundColor: '#1DB954', color: '#FFFFFF', borderRadius: '4px', padding: '8px 16px', fontWeight: 'bold', cursor: 'pointer' }}>Follow me on Spotify</button>
                </Col> 
            </Row>
            <br/>
            <Row>
                <Col>
                <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/3sIcxWGjlvyCFK3GVUQ9NH?utm_source=generator&theme=0" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Col>
                <Col>
                <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/2bErsRY1hKTIfFG7MJELlx?utm_source=generator" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/3JiN4XeIuApKDp4r1ck0So?utm_source=generator" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Col>
                
                <Col>
                <iframe style={{"borderRadius":"12px"}} src="https://open.spotify.com/embed/playlist/1t9lv03DWz9jtLqmhAXxX9?utm_source=generator" width="100%" height="352"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </Col>
            </Row>
         </Container>
    </div>
  );
}