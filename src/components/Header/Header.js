import React, { useRef } from "react";

import Logo from '../images/Metro-Property-Management-NZ-Logo-1 1.png';
import { Container} from "reactstrap";
import {NavLink,Link} from 'react-router-dom';
import "./Header.css"



const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/propertymanagement",
      display: "Property management",
    },
    {
      path: "/curentlisting",
      display: "Current listings",
    },
  
    {
      path: "/news",
      display: "News",
    },
    {
      path: "/aboutus",
      display: "About us",
    },
    {
        path: "/contact",
        display: "Contact",
    },
    {
        path: "/signin",
        display: "Sign in",
    },
  ];
  
const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <Container className="navbar-section ">
       <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i className="ri-menu-line" onClick={toggleMenu}></i>
              </span>
        </div>
      <div className="menu-section">
        <Link to='/home'>
       <div className="logo" >
        <img 
           src={Logo}
           className="logoHeader"
           alt="Property-logo"
        />
       </div>
       </Link>
       <div className="navigation" ref={menuRef} onClick={toggleMenu}>
       <div className="menu-section-right">
        {navLinks.map((item,index)=>(
          <NavLink
             to={item.path}
             className= {(navClass) =>
                navClass.isActive ? 'nav__active nav__item':"nav__item"   
                 }
                 key={index}
          >
            {item.display}
          </NavLink>
        ))}
       </div>
       </div>
       </div>
    </Container>
  )
}

export default Header
