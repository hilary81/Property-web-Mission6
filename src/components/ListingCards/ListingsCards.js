import React from 'react';
import {useState,useEffect} from 'react';
import ListingCard from "./ListingCard";
import './Listings.css';
import { Container, Row } from 'react-bootstrap';
import PaginationRounded from '../Pagination/Pagination';

const ListingsCards = () => {
  const [properties, setProperties] = useState( null);

  useEffect(()=>{
     fetch("http://localhost:3001")
     .then((res)=> res.json())
     .then((properties)=> setProperties(properties))
  
 // eslint-disable-next-line
  }, ['']);
  console.log(properties)
 
  return (
    <div>
  
       <Container style={{backgroundColor:"white"}} className='Listings-group'>
          <Row className="listing-container">
        

          {properties && properties.map((property)=>{
              return(
                <ListingCard listing_id ={property.listing_id} price={property.price} deal={property.deal} address={property.address} url={property.url} ></ListingCard>
           ) })}
         </Row>
           <div  className='pagination'>
              <PaginationRounded />
          </div>
      </Container>
          
    </div>
  )
}

export default ListingsCards;