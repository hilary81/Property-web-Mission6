import React from 'react';
import {Container,Row} from 'react-bootstrap';
import './Selections.css';


const Selections = () => {
  return (
       <Container className="input-containers">
        <Row className='search-container'>
          <div className='search-section'>
           <div className='selection-groups'>
            <div className='search-groups'>
              <div className="search__box">
                <input type="text" placeholder="Search by location" />
                <span>
                  <i className="ri-search-line"></i>
                </span>
            </div>
         </div>
         <div>
          <select className='selects'  >
           <option>Property Type</option>
           <option>Apartment</option>
           <option>Condominium</option>
           <option>Banglo</option>
        </select>
        </div>
        <div>
          <select className='selects'  >
           <option>Price</option>
           <option>$400-$500</option>
           <option>$500-$600</option>
           <option>$600-$700</option>
        </select>
        </div>
        <div>
        
        <select className='selects'  >
            <option>Bed & bath</option>
           <option>3beds , 1bath</option>
           <option>2beds , 1bath</option>
           <option>1beds , 1bath</option>
        </select>
        </div>
        <div>
        <select className='selects'  >
           <option>Car parks</option>
           <option>Off road</option>
           <option>double garage</option>
           <option>No</option>
        </select>
        </div>
        <div>
          <select className='selects'  >
           <option>More</option>
           <option>Apartment</option>
           <option>Condominium</option>
           <option>Banglo</option>
        </select>
        </div>
        </div>
        </div>
    </Row> 
    </Container> 
    
  )
}

export default Selections;