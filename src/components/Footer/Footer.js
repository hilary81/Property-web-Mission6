import React from 'react';
import { Container, Col } from "reactstrap";
import Logo from '../images/Metro-Property-Management-NZ-Logo-1 1.png';
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer' >
        <Container className='footer-container'>
        
        <Col lg="2" md="2" sm="6" className='logo-section'> 
        <div className='logo footer_logo'>
            <Link to='/home' >
                <img 
                src={Logo}
                height='80px'
                alt="logo"
                />
            </Link>
        </div>
        </Col>
        <Col lg="4" md="4" sm="6" className='add-section'> 
          <h3 className='add-title'>
            Address
          </h3>
          <p className='add-details'>
            Level 17, PWC Building Commercial Bay Tower, 11-19 Customs Street West, Auckland CBD 1010, New Zealand
          </p>
        </Col>
        <Col lg="6" md="6" sm="12" className='newsletter-section'> 
           <Container className='newsletter-container'>
            <h3 className='sub-title'>Subscribe to our Newletter</h3>
            <input 
            type="email"
            placeholder='Enter your email address here'
            name="email"
            className='input-box'
            />
            <button className='sub-button'>SUBSCRIBE</button>
           </Container>
        </Col>
        </Container>
        <Container className='bottom-footer'>
           <Col className='contact-list'>
           <ul className='contact-sec'>
            <li>Phone: 09 391 4642 </li>
            <li>International: +64 21 642 119</li>
            <li>Email:info@metronz.co.nz</li>
           </ul>             
           </Col>
           <Col className='social-media'>
             <div className=' '>
                 <Link to="#" className='link-icon'>                 
                 <i className="ri-mail-unread-fill social_icon" ></i>                 
                </Link>
             </div>
              <div className=' '>
                 <Link to="#" className='link-icon'>            
                <i className="ri-twitter-fill social_icon"></i>                      
              </Link>
            </div>
            <div className=' '>
                 <Link to="#" className='link-icon'>            
                <i className="ri-instagram-fill social_icon"></i>                      
              </Link>
            </div>
            <div className=' '>
                 <Link to="#" className='link-icon'>            
                <i className="ri-facebook-fill social_icon"></i>                      
              </Link>
            </div>
           </Col>
        </Container> 
    </footer>
 
    
  )
}

export default Footer
