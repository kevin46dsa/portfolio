import React from 'react';
//import './Contact.css';
import kevimg from "../../Assets/kevindsa.png"
import Image from 'react-bootstrap/Image'

const Contact = () => {
  return (<div>
    <div className="text-center">
        <h1 >Want to get it touch ?</h1>
      </div>
        <div className="contact3 py-5 mx-5 " >
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow text-center">
            <Image src={kevimg} style={{height:"375px"}} />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="contact-box ml-3">
            <h1 class="font-weight-light mt-2">Quick Contact</h1>
            <p>"This Form does not work currently, work in progress use QR code or email to get in touch"</p>
            <form class="mt-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="name"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="email" placeholder="email address"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="phone"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea class="form-control" rows="3" placeholder="message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-2"></div>
        <div class="col-lg-12">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
            <div class="col-lg-2 col-md-2 text-center">
              </div>
              <div class="col-lg-4 col-md-4 text-center">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png" alt='address'/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">Stevens Institute of Technology
                      <br/> Hoboken</p>
                  </div>
                </div>
              </div>
              
              <div class="col-lg-4 col-md-4 text-center">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                    <img src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png" alt="email"/>
                  </div>
                  <div class="">
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                      kdsa1@stevens.edu
                      <br/> kevin0108dsa@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 text-center">
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
  );
};

export default Contact;