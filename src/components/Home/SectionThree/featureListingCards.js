import React from 'react';
// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import FeatureListingCardData from './featureListingCardsData';
import { Container, Row } from 'react-bootstrap';
import Stack from '@mui/material/Stack';


const FeatureListingCards = () => {
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
 
       <Container className='Listings-group'>
          <Row className="listing-container">
       <Stack direction="row" spacing={10}>
          {properties && properties.map((property)=>{
              return(
                <FeatureListingCardData listing_id ={property.listing_id} price={property.price} deal={property.deal} address={property.address} url={property.url} bed={property.bed} bath={property.bath} carpark={property.carpark}></FeatureListingCardData>
           ) })}
        </Stack>
         </Row>
      </Container>
         
    </div>
  )
}
export default FeatureListingCards;