import React, {useState} from 'react';
//import './Contact.css';


import {serverTimestamp, collection, addDoc, doc, onSnapshot} from "firebase/firestore"; 
import {db} from "../../firebase"
import { Alert } from 'react-bootstrap';
import { send } from 'emailjs-com';
import github from "../../Assets/github.png"
import linkedin from "../../Assets/linkedin.png"
import soundcloud from "../../Assets/soundcloud.png"
import spotify from "../../Assets/spotify.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import QRcode from "../../Assets/kevindsa.png"



const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message:"",
  });
  const { name ,email, phone, message} = formData;
  
  let turnEmailON = false
  let emailCred = undefined

  async function checkmailLimit(){
    const emailRef = doc(
      db,
      "emailCred",
      "9ht5yqwnj0wQi3wYmecQ"
    );
    
    onSnapshot(emailRef, (docSnap) => {
      if (docSnap.exists()) {
        let data = docSnap.data();
        emailCred = {...data}
        

        // add logic to compare date with existing in database 
        return false
      }
    });
  }

  



const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

 async function onSubmit(e){
  e.preventDefault();
  let withinEmailLimit = await checkmailLimit()
  const contactRef = collection(db, "contacts");
  //const emailRef = doc(db,"emailCred","9ht5yqwnj0wQi3wYmecQ");
  

  const formDataCopy = { ...formData };
  formDataCopy.timestamp = serverTimestamp();
  const toMe = {
    from_name: formDataCopy.name,
    message: formDataCopy.message,
    from_email: formDataCopy.email,
  }
  const toFiller = {
    from_name: formDataCopy.name,
    message: formDataCopy.message,
    from_email: formDataCopy.email,
  }

  // add logic to update log in emailCred

  await addDoc(contactRef, formDataCopy);

  setShowAlert(true)
  setFormData({
    name: "",
    email: "",
    phone: "",
    message:"",
  })
  setTimeout(() => {
    setShowAlert(false)
    if(turnEmailON && withinEmailLimit){
    //Send mail to sender
    send(
      emailCred.service_ID,
      emailCred.template1_ID,
      toFiller,
      emailCred.Private_Key
    ).then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    }
  }, 5000);

  if(turnEmailON && withinEmailLimit){
    //Send mail notification to me
  send(
    emailCred.service_ID,
    emailCred.template2_ID,
    toMe,
    emailCred.Private_Key
  ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  }
  }
  

  return (
  <div > 
    <br/>
    <br/>
    <div className="text-center">
        <h1 >Want to get it touch ?</h1>
    </div>
        
<Container fluid>
        <Row>
          <Col lg="1"></Col>
          <Col sm="12" md="12" lg="5" className='d-flex  justify-content-center flex-column align-items-center'>
          <div className='qrCode'>
          <Image src={QRcode} className="img-fluid shadow p-3 mb-2 bg-white rounded" style={{ maxHeight: "450px" }} alt="Responsive Image" />
          </div>
          </Col>

          <Col sm="12" md="12" lg="5" className='d-flex  justify-content-center flex-column align-items-center'>
          <div >
          <br/>

          <h1 className="font-weight-light mt-2">Quick Contact</h1>
            {showAlert && 
              <Alert variant="success">
                Thank you for contacting me, I will get back to you soon !
              </Alert>
            }
            <form className="mt-4" onSubmit={onSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input 
                    id="name"
                    className="form-control" 
                    type="text" 
                    placeholder="name" 
                    onChange={onChange}
                    minLength="3"
                    value={name}
                    required/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input 
                    id="email"
                    value={email}
                    className="form-control" 
                    type="email" 
                    placeholder="email address"
                    onChange={onChange}
                    minLength="4"
                    required/>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input 
                    id="phone"
                    className="form-control" 
                    type="tel" 
                    placeholder="phone number"
                    onChange={onChange}
                    minLength="9"
                    value={phone}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea 
                    id="message"
                    className="form-control" 
                    rows="3" 
                    onChange={onChange}
                    value={message}
                    placeholder="message"
                    required/>
                  </div>
                </div>
                
                <div className="col-lg-12">
                <br/>
                <button type="submit" className="btn btn-primary btn-lg btn-block btn-outline-light"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>


          <br/>
          </div>
          
          
          <br/>
          <br/>
          <div >
         
    <br/>
    <br/>
        </div>
      </Col>
      <Col lg="1"></Col>
      </Row>
    </Container>
    <br/>


    <Container>
      <Row>
        <Col className='d-flex justify-content-center'>
        
      
       
      <div class="social-icons">
    <a href="https://github.com/kevin46dsa" className="btn btn-lg btn-outline-secondary">
      <img src={github} style={{maxHeight:"35px"}} alt='Github'/> GitHub
    </a>
    {"      "}
    <div className="vr" />
    {"      "}
    <a href="https://www.linkedin.com/in/kevindsa2017" className="btn btn-lg btn-outline-secondary">
      <img src={linkedin} style={{maxHeight:"35px"}} alt='LinkedIN'/> LinkedIn
    </a>
    {"      "}
    <div className="vr" />
    {"      "}
    <a href="https://www.buymeacoffee.com/kevin46dsa" target="_blank" rel="noopener noreferrer">
    <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"/></a>
    {"      "}
    <div className="vr" />
    {"      "}
    <a href="https://soundcloud.com/noisynos" className="btn btn-lg btn-outline-secondary">
      <img src={soundcloud} style={{maxHeight:"35px"}} alt='SoundCloud'/> Soundcloud
    </a>
    {"      "}
    <div className="vr" />
    {"      "}
    <a href="https://open.spotify.com/user/ib9bugf6icc5xd4kzc4rku8ot?si=da47842f1b87442b" className="btn btn-lg btn-outline-secondary">
      <img src={spotify} style={{maxHeight:"35px"}} alt='Spotify'/> Spotify
    </a>

  
    </div>
  
      </Col>
      </Row>
    </Container>
    <br/>
    </div>        

  );
};

export default Contact;