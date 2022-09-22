import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Listing from '../pages/Listing';
import Property from '../pages/property';
import News from '../pages/News';
import AboutUS from '../pages/AboutUS';
import Contact from '../pages/Contact';
import SignIn from '../pages/SignIn';

const Routers = () => {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/propertymanagement" element={<Property />} />
        <Route path="/curentlisting" element={<Listing />} />
        <Route path="/news" element={<News />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />      

       
      </Routes>
    );
  };

export default Routers
