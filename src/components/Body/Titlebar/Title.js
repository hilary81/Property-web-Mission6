import React from 'react';
import "./Title.css";
import {Container} from 'react-bootstrap';
import Stack from '@mui/material/Stack';




const Title = () => {
  return (
   <Container  className="tittlebar-container">
     <Container className="titlebar">
           <h2>City Centre Listings</h2> 
           <div className="titlebar-section">   
         <Stack direction="row" spacing={1} className="information">
             <i className="ri-information-fill " > </i>          
             <p className="information-1">information about the rental process</p>
         </Stack>
   
      
      <Stack direction=" row" spacing ={2} className="">
          <select class="form-select  " aria-label="form-select-lg example">
            <option selected className='selected-title'>Sort by..</option>
            <option value="lowtohigh">Price Low to High</option>
            <option value="hightolow">Price High to Low</option>
            <option value="top rated">Top Rated</option>
            <option value="new listings">New Listings</option>
        </select>
        <Stack  className="mapview-icon">
             <i className="ri-road-map-fill"></i>
            <p className="mapview-title">map view</p>
       
        </Stack>
    </Stack>
    </div>
    </Container>
    </Container>
  )
}

export default Title;
